import TodoController from "./todo-controller.js"
import todoList from "./sample-todo-list.js" 

export default function ScreenController() {
    const app = TodoController();
    const DEFAULT_PROJECT = "Default";

    const todoDiv = document.querySelector("#todo-container");
    const projectsDiv = document.querySelector("#projects-container");
    const newProjectButton = document.querySelector("#newProj");

    let selectedProjName = DEFAULT_PROJECT;

    // Initial dummy data
    app.addProject(DEFAULT_PROJECT);
    app.addProject("project 2");
    app.addTodo(DEFAULT_PROJECT, todoList[0]);
    app.addTodo(DEFAULT_PROJECT, todoList[1]);
    app.addTodo(DEFAULT_PROJECT, todoList[2]);
    app.addTodo(DEFAULT_PROJECT, todoList[0]);
    app.addTodo(DEFAULT_PROJECT, todoList[1]);
    app.addTodo(DEFAULT_PROJECT, todoList[2]);

    const updateScreen = () => {
        // clear divs
        projectsDiv.textContent = '';
        todoDiv.textContent = '';

        let projects = app.getProjects();
        projects.forEach(project => {
            projectsDiv.appendChild(createProjectElement(project));
        });

        let proj = app.getProject(selectedProjName);
        proj.todos.forEach(todo => {
            todoDiv.appendChild(createTodoElement(todo));
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

        const p = document.createElement('p');
        p.textContent = project.name;
        div.appendChild(p);
        return div;
    }

    function handleNewProject(event) {
        console.log(event.target)
        console.log(event.currentTarget)

        app.addProject("random name");
        updateScreen();
    }

    newProjectButton.addEventListener('click', handleNewProject);

    // Initial render
    updateScreen();
}
