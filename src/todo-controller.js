import Project from './project.js'
import Todo from './todo.js'

export default function TodoManager() {
    const projects = []

    const addProject = function(name) {
        let idx = projects.findIndex(p => p.name == name)

        // project must have a new name
        if (idx !== -1) return;

        let project = new Project(name);
        projects.push(project);
        return project;
    }

    const deleteProject = function(projectName) {
        if (!projectName) return;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return;

        projects.splice(idx, 1);
    }

    const addTodo = function(todo) {
        if (!todo) return;

        let idx = projects.findIndex(p => p.name == todo.projectName);

        // create new project if it does not yet exist
        if (idx === -1) {
            console.log(todo.projectName);
            let project = addProject(todo.projectName);
            console.log(todo);
            console.log(Object.values(todo));
            project.addTodo(new Todo(...Object.values(todo)));
            return;
        }

        let project = projects[idx]
        project.addTodo(new Todo(...Object.values(todo)));
    }

    const deleteTodo = function(projectName, todoId) {
        if (!projectName || !todoId) return;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return;

        let project = projects[idx]
        project.deleteTodo(todoId);
    }

    const getProjects = () => projects;

    const getProject = function(projectName) {
        if (!projectName) return;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return;

        return projects[idx]
    }

    const getAllTodos = () => {
        let todos = []
        projects.forEach(project => {
            todos.push(...project.todos);
        });
        return todos;
    }

    return {
        addProject, deleteProject, getProjects, addTodo,
        deleteTodo, getProject, getAllTodos,
    };
}
