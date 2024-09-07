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
    const newTodoButton = document.querySelector(".add-todo");
    const newTodoForm = document.querySelector("#newTodoForm");
    const newProjectButton = document.querySelector(".add-project");
    const allButton = document.querySelector("#allTodos");
    const todayButton = document.querySelector("#today");
    const weekButton = document.querySelector("#week");
    const completedButton = document.querySelector("#completed");
    const dialog = document.querySelector(".new-todo-dialog");
    const overlay = document.querySelector(".overlay");
    const selectForProject = document.querySelector("select#project");
    const dueDate = document.querySelector(".new-todo-dialog #due-date");

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
        selectForProject.textContent = '';

        updateProjects();
        updateContent();
        dueDate.valueAsDate = defaultDueDate;
    }

    function updateContent() {
        updateTitleDiv();
        updateTodosDiv();
    }

    function updateProjects() {
        let projects = app.getProjects();
        projects.forEach(project => {
            projectsDiv.appendChild(createProjectElement(project));
            selectForProject.appendChild(
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

        console.log(todo);
        div.classList.add("todo-item");
        div.dataset.projectName = todo.projectName;
        div.dataset.id = todo.id;
        title.textContent = todo.title;
        dueDate.textContent = format(todo.dueDate, "MM/dd/yyyy");
        dueDate.classList.add("due-date");
        remove.textContent = "R";
        remove.addEventListener('click', handleDeleteTodoItem);
        div.appendChild(title);
        div.appendChild(dueDate);
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
        /* Use the currently selected project as the default
        project choice */
        if (selectedNavItem === NavItem.PROJECT) {
            selectForProject.value = selectedProjectName;
        }
        overlay.classList.add("active");
        dialog.classList.add("active");
    }

    function handleSubmitNewTodo(event) {
        event.preventDefault();

        let title = event.target.elements.title.value;
        let dueDate = event.target.elements['due-date'].value;
        let projectName = event.target.elements.project.value;
        let todo = {
            title: title,
            description: "temp description",
            dueDate: dueDate,
            priority: Priority.MEDIUM,
            done: false,
            projectName: projectName,
        }

        app.addTodo(todo);
        overlay.classList.remove("active");
        dialog.classList.remove("active");
        defaultDueDate = new Date(dueDate);
        updateScreen();
    }

    function handleCancelNewTodo(event) {
        overlay.classList.remove("active");
        dialog.classList.remove("active");
    };

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

    newTodoButton.addEventListener('click', handleNewTodoClick);
    newTodoForm.addEventListener('submit', handleSubmitNewTodo);
    overlay.addEventListener('click', handleCancelNewTodo);
    newProjectButton.addEventListener('click', handleNewProjectClick);
    allButton.addEventListener('click', handleAllClick);

    // Initial render
    updateScreen();
}
