import TodoController from "./todo-controller.js"
import todoList from "./data/sample-todo-list.js" 

export default function ScreenController() {
    const app = TodoController();
    const DEFAULT_PROJECT = "Default";

    const todoDiv = document.querySelector("#todo-container");
    const projectsDiv = document.querySelector("#projects-container");
    const newProjectButton = document.querySelector("#newProj");

    let selectedProjectName = DEFAULT_PROJECT;

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

    const updateScreen = () => {
        // clear divs
        projectsDiv.textContent = '';
        todoDiv.textContent = '';

        // update projects
        let projects = app.getProjects();
        projects.forEach(project => {
            projectsDiv.appendChild(createProjectElement(project));
        });
        projectsDiv.addEventListener('click', handleProjectClick);

        // update content
        let proj = app.getProject(selectedProjectName);
        proj.todos.forEach(todo => {
            const div = createTodoElement(todo);
            todoDiv.appendChild(div);
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
        const div = document.createElement('div');

        const b = document.createElement('button');
        b.textContent = project.name;
        b.dataset.name = project.name;
        div.appendChild(b);
        return div;
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
        // Make sure I've clicked a project and not any gaps between
        if (!projectName) return;

        selectedProjectName = projectName;
        updateScreen();
    }

    newProjectButton.addEventListener('click', handleNewProject);

    // Initial render
    updateScreen();
}
