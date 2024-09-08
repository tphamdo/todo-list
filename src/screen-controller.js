import TodoController from "./todo-controller.js";
import todoList from "./data/sample-todo-list.js";
import NavItem from "./enums/nav-item.js";
import Priority from "./enums/priority.js";
import { format } from "date-fns";

export default function ScreenController() {
    const app = TodoController();

    const projectsDiv = document.querySelector("#projects-container");
    const todosDiv = document.querySelector("#todo-container");
    const titleDiv = document.querySelector("#title-container");
    const allButton = document.querySelector("#allTodos");
    // const todayButton = document.querySelector("#today");
    // const weekButton = document.querySelector("#week");
    // const completedButton = document.querySelector("#completed");
    const newTodoButton = document.querySelector(".add-todo");
    const newProjectButton = document.querySelector(".add-project");
    const todoForm = document.querySelector("#todo-form");
    const todoDialog = document.querySelector(".todo-dialog");
    const overlay = document.querySelector(".overlay");
    const formHeader = document.querySelector("#todo-form .header");
    const formTitle = document.querySelector("#todo-form #title");
    const formDueDate = document.querySelector("#todo-form #due-date");
    const formProject = document.querySelector("#todo-form #project");

    let defaultDueDate = new Date()
    let selectedNavItem = NavItem.ALL;
    let selectedProjectName = null;

    // Initial dummy data
    todoList.forEach(todo => {
        app.addTodo(todo);
    });

    function updateScreen() {
        // clear divs
        projectsDiv.textContent = '';
        todosDiv.textContent = '';
        formProject.textContent = '';

        updateProjects();
        updateContent();
        formDueDate.valueAsDate = defaultDueDate;
    }

    function updateContent() {
        updateTitleDiv();
        updateTodosDiv();
    }

    function updateProjects() {
        let projects = app.getProjects();
        projects.forEach(project => {
            projectsDiv.appendChild(createProjectElement(project));
            formProject.appendChild(
                createSelectOptionElement(project.name));
        });
        projectsDiv.addEventListener('click', handleProjectClick);
    }

    function updateTitleDiv() {
        var title;
        // clear current title
        titleDiv.textContent = '';

        switch(selectedNavItem) {
            case NavItem.ALL: // fall through
            case NavItem.TODAY:
            case NavItem.WEEK:
            case NavItem.COMPLETED:
                title = Symbol.keyFor(selectedNavItem);
                break;
            case NavItem.PROJECT:
                title = selectedProjectName? selectedProjectName : '';
                break;
            default:
                return;
        }

        titleDiv.appendChild(createTitleElement(title));
    }

    function updateTodosDiv() {
        var todos;
        switch(selectedNavItem) {
            case NavItem.ALL:
                todos = app.getAllTodos();
                console.log(todos);
                break;
            case NavItem.TODAY:
                break;
            case NavItem.WEEK:
                break;
            case NavItem.COMPLETED:
                break;
            case NavItem.PROJECT:
                todos = app.getProject(selectedProjectName).todos;
                break;
            default:
                return;
        }

        todos.forEach(todo => {
            todosDiv.appendChild(createTodoElement(todo));
        });
    }

    function createTodoElement(todo) {
        const div = document.createElement('div');
        const title = document.createElement('p');
        const dueDate = document.createElement('p');
        const remove = document.createElement('button');
        const edit = document.createElement('button');

        // console.log(todo);
        div.classList.add("todo-item");
        div.dataset.projectName = todo.projectName;
        div.dataset.id = todo.id;
        title.textContent = todo.title;
        dueDate.textContent = format(todo.dueDate, "MM/dd/yyyy");
        dueDate.classList.add("due-date");
        edit.textContent = "E";
        edit.addEventListener('click', handleEditTodoClick);
        edit.classList.add("edit");
        remove.textContent = "R";
        remove.addEventListener('click', handleDeleteTodoItem);
        remove.classList.add("remove");
        div.appendChild(title);
        div.appendChild(dueDate);
        div.appendChild(edit);
        div.appendChild(remove);

        return div;
    }

    function createProjectElement(project) {
        const b = document.createElement('button');
        b.textContent = project.name;
        b.dataset.name = project.name;
        b.classList.add("nav-item");
        b.classList.add("project-item");

        const deleteDiv = document.createElement('button');
        deleteDiv.classList.add("deleteContainer")
        deleteDiv.innerHTML = `
            <div class="right-button-panel icon">
                <i class="delete">&times;</i>
            </div>
        `
        deleteDiv.addEventListener('click', handleDeleteProject);
        b.appendChild(deleteDiv);
        return b;
    }

    function createSelectOptionElement(optionName) {
        const o = document.createElement('option');
        o.setAttribute("value", optionName);
        o.textContent = optionName;
        return o;
    }

    function createTitleElement(title) {
        const h3 = document.createElement('h3');
        h3.textContent = title;
        return h3;
    }

    function handleNewTodoClick(event) {
        todoForm.addEventListener('submit', handleSubmitNewTodo);
        todoForm.removeEventListener('submit', handleSubmitEditTodo);

        overlay.classList.add("active");
        todoDialog.classList.add("active");
        formHeader.textContent = "New ToDo";
        formTitle.value = "";
        // formDueDate.value = "";
        /* Use the currently selected project as the default
        project choice */
        if (selectedNavItem === NavItem.PROJECT) {
            formProject.value = selectedProjectName;
        } else {
            formProject.value = '';
            const projects = app.getProjects()
            if (projects.length) {
                formProject.value = projects[0].name;
            }
        }

    }

    function handleSubmitNewTodo(event) {
        event.preventDefault();

        const title = event.target.elements.title.value;
        const dueDate = event.target.elements['due-date'].value;
        const projectName = event.target.elements.project.value;
        const todo = {
            title: title,
            description: "temp description",
            dueDate: dueDate,
            priority: Priority.MEDIUM,
            done: false,
            projectName: projectName,
        }

        app.addTodo(todo);
        overlay.classList.remove("active");
        todoDialog.classList.remove("active");
        defaultDueDate = new Date(dueDate);
        updateScreen();
    }

    function handleCancelTodoDialog(event) {
        overlay.classList.remove("active");
        todoDialog.classList.remove("active");
        todoDialog.removeAttribute("data-projectName");
        todoDialog.removeAttribute("data-id");
    };

    function handleEditTodoClick(event) {
        todoForm.removeEventListener('submit', handleSubmitNewTodo);
        todoForm.addEventListener('submit', handleSubmitEditTodo);

        const todoElement = event.target.parentElement;
        const projectName = todoElement.dataset.projectName;
        const id = todoElement.dataset.id;
        const todo = app.getTodo(projectName, id);


        // console.log(todo);
        // console.log(todo.title);
        // console.log(todo.dueDate);
        formHeader.textContent = "Edit ToDo";
        formTitle.value = todo.title
        formDueDate.valueAsDate = todo.dueDate;
        formProject.value = todo.projectName;
        overlay.classList.add("active");
        todoDialog.classList.add("active");
        todoDialog.dataset.projectName = projectName;
        todoDialog.dataset.id = id;
        // console.log(app.getAllTodos());
    }

    function handleSubmitEditTodo(event) {
        console.log("handleSubmitEditTodo");
        event.preventDefault();

        const title = event.target.elements.title.value;
        const dueDate = event.target.elements['due-date'].value;
        const projectName = event.target.elements.project.value;
        const todo = {
            title: title,
            description: "temp description",
            dueDate: dueDate,
            priority: Priority.MEDIUM,
            done: false,
            projectName: projectName,
        }

        console.log(todoDialog.dataset.projectName, todoDialog.dataset.id, todo);
        app.editTodo(todoDialog.dataset.projectName, todoDialog.dataset.id, todo);
        overlay.classList.remove("active");
        todoDialog.classList.remove("active");
        todoDialog.removeAttribute("data-projectName");
        todoDialog.removeAttribute("data-id");
        defaultDueDate = new Date(dueDate);
        updateScreen();
    };

    function handleDeleteTodoItem(event) {
        const projectName = event.currentTarget.parentElement.dataset.projectName;
        const id = event.currentTarget.parentElement.dataset.id;
        console.log("proj:", projectName, typeof(projectName));
        console.log("id:", id, typeof(id));

        console.log("todos:", app.getProject("Habits").todos);
        app.deleteTodo(projectName, id);
        console.log("todos:", app.getProject("Habits").todos);
        updateScreen();
    }

    function handleNewProjectClick(event) {
        let form = document.createElement('form');
        let input = document.createElement('input');
        /* overlay allows users to click out of form
        overlay used as a sibling of the form so that the
        z-index of the overlay and form can be used together */
        let overlay = document.createElement('div');

        form.classList.add("new-project");
        input.setAttribute("type", "text");
        input.setAttribute("name", "projectName");
        input.required = true;
        input.setAttribute("minlength", "3");
        input.setAttribute("maxlength", "20");
        input.classList.add("new-project");
        overlay.classList.add("overlay");

        form.appendChild(input)
        projectsDiv.append(overlay);
        projectsDiv.append(form);

        input.focus();
        overlay.classList.add("active");

        function handleCancelNewProject(event) {
            // remove overlay and form
            projectsDiv.removeChild(projectsDiv.lastChild);
            projectsDiv.removeChild(projectsDiv.lastChild);
        }

        function handleSubmitNewProject(event) {
            event.preventDefault();
            // remove overlay and form
            projectsDiv.removeChild(projectsDiv.lastChild);
            projectsDiv.removeChild(projectsDiv.lastChild);

            let projectName = event.target.elements.projectName.value;
            app.addProject(projectName);
            updateScreen();
        }

        form.addEventListener('submit', handleSubmitNewProject);
        overlay.addEventListener('click', handleCancelNewProject);
    }

    function handleProjectClick(event) {
        const projectName = event.target.dataset.name;
        /* Make sure I've clicked a project and not any gaps in
        between or the delete button */
        if (!projectName) return;

        selectedNavItem = NavItem.PROJECT;
        selectedProjectName = projectName;
        updateScreen();
    }

    function handleDeleteProject(event) {
        let projectName = event.currentTarget.parentElement.dataset.name;

        app.deleteProject(projectName);
        if (selectedNavItem === NavItem.PROJECT &&
            projectName === selectedProjectName) {
            selectedNavItem = NavItem.ALL;
        }

        updateScreen();
    }

    function handleAllClick() {
        selectedNavItem = NavItem.ALL;
        updateScreen();
    }

    function clearTodoFormEventListeners() {
    }
    newTodoButton.addEventListener('click', handleNewTodoClick);
    overlay.addEventListener('click', handleCancelTodoDialog);
    newProjectButton.addEventListener('click', handleNewProjectClick);
    allButton.addEventListener('click', handleAllClick);

    // Initial render
    updateScreen();
}
