import TodoController from "./todo-controller.js"
import todoList from "./data/sample-todo-list.js"
import NavItem from "./enums/nav-item.js"

export default function ScreenController() {
    const app = TodoController();
    const DEFAULT_PROJECT = "Default";

    const projectsDiv = document.querySelector("#projects-container");
    const todosDiv = document.querySelector("#todo-container");
    const titleDiv = document.querySelector("#title-container");
    const newProjectButton = document.querySelector("#newProj");
    const allButton = document.querySelector("#allTodos");
    const todayButton = document.querySelector("#today");
    const weekButton = document.querySelector("#week");
    const completedButton = document.querySelector("#completed");

    let selectedNavItem = NavItem.ALL;
    let selectedProjectName = null;

    // Initial dummy data
    app.addProject(DEFAULT_PROJECT);
    app.addTodo(DEFAULT_PROJECT, todoList[0]);
    app.addTodo(DEFAULT_PROJECT, todoList[1]);
    app.addTodo(DEFAULT_PROJECT, todoList[2]);
    app.addTodo(DEFAULT_PROJECT, todoList[0]);
    app.addTodo(DEFAULT_PROJECT, todoList[1]);
    app.addTodo(DEFAULT_PROJECT, todoList[2]);
    app.addProject("project 2");
    app.addTodo("project 2", todoList[2]);
    console.log("yo");

    function updateScreen() {
        // clear divs
        projectsDiv.textContent = '';
        todosDiv.textContent = '';

        // update projects
        let projects = app.getProjects();
        projects.forEach(project => {
            projectsDiv.appendChild(createProjectElement(project));
        });
        projectsDiv.addEventListener('click', handleProjectClick);

        // update content
        updateContent();
    }

    function updateContent() {
        updateTitleDiv();
        updateTodosDiv();
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

        const p = document.createElement('p');
        p.textContent = todo.title;
        div.appendChild(p);
        return div;
    }

    function createProjectElement(project) {
        const b = document.createElement('button');
        b.textContent = project.name;
        b.dataset.name = project.name;

        const deleteDiv = document.createElement('div');
        deleteDiv.classList.add("right-button-panel")
        deleteDiv.innerHTML = `
            <div class="right-button-panel">
                <i class="delete icon">&times;</i>
            </div>
        `
        deleteDiv.addEventListener('click', handleDeleteProject);
        b.appendChild(deleteDiv);
        return b;
    }

    function createTitleElement(title) {
        const h3 = document.createElement('h3');
        h3.textContent = title;
        return h3;
    }


    function handleNewProject(event) {
        console.log(event.target)
        console.log(event.currentTarget)

        // update with input
        app.addProject("random name");
        updateScreen();
    }

    function handleProjectClick(event) {
        console.log("handle project click");
        const projectName = event.target.dataset.name;
        /* Make sure I've clicked a project and not any gaps in
         * between or the delete button */
        if (!projectName) return;

        selectedNavItem = NavItem.PROJECT;
        selectedProjectName = projectName;
        updateScreen();
    }

    function handleDeleteProject(event) {
        console.log("handleDeleteProject");
        console.log(event.currentTarget);
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

    newProjectButton.addEventListener('click', handleNewProject);
    allButton.addEventListener('click', handleAllClick);

          // <button id="allTodos">All</button>
          // <button id="today">Today</button>
          // <button id="week">Week</button>
          // <button id="completed">Completed</button>
    // Initial render
    updateScreen();
}
