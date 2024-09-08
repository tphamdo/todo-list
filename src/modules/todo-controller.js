import Project from './project.js'
import Todo from './todo.js'
import { isToday, addWeeks, isWithinInterval, startOfDay, endOfDay } from 'date-fns';

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

    const addTodo = function(todoJSON) {
        if (!todoJSON) return;

        let idx = projects.findIndex(p => p.name == todoJSON.projectName);

        // create new project if it does not yet exist
        if (idx === -1) {
            let project = addProject(todoJSON.projectName);
            project.addTodo(new Todo(...Object.values(todoJSON)));
            return;
        }

        let project = projects[idx]
        project.addTodo(new Todo(...Object.values(todoJSON)));
    }

    const deleteTodo = function(projectName, todoId) {
        if (!projectName || !todoId) return;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return;

        let project = projects[idx]
        project.deleteTodo(todoId);
    }

    const getTodo = function(projectName, todoId) {
        if (!projectName || !todoId) return null;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return null;

        let project = projects[idx]
        return project.getTodo(todoId);
    }

    const editTodo = function(projectName, todoId, updatedTodoJSON) {
        const curTodo = getTodo(projectName, todoId);
        if (!curTodo) return;

        const targetProjectName = updatedTodoJSON.projectName;
        if (targetProjectName && curTodo.projectName !== targetProjectName) {
            console.log("here");
            const targetProject = getProject(targetProjectName);
            const curProject = getProject(curTodo.projectName)
            if (!targetProject || !curProject) return;

            curProject.deleteTodo(todoId);
            curTodo.edit(updatedTodoJSON);
            targetProject.addTodo(curTodo);
        } else {
            curTodo.edit(updatedTodoJSON);
        }

        console.log(this.projects);
    }

    const getProjects = () => projects;

    const getProject = function(projectName) {
        if (!projectName) return null;

        let idx = projects.findIndex(p => p.name == projectName)

        // break if project is not found
        if (idx === -1) return null;

        return projects[idx]
    }

    const getAllTodos = () => {
        let todos = []
        projects.forEach(project => {
            todos.push(...project.todos);
        });
        return todos;
    }

    const getTodaysTodos = () => {
        let todos = getAllTodos();
        todos = todos.filter(todo => isToday(todo.dueDate));
        return todos;
    }

    const getWeeksTodos = () => {
        let todos = getAllTodos();
        let today = startOfDay(new Date());
        let oneWeek = endOfDay(addWeeks(today, 1));
        todos = todos.filter(todo => isWithinInterval(todo.dueDate,
            { start: today, end: oneWeek }));
        return todos;
    }

    const getCompletedTodos = () => {
        let todos = getAllTodos();
        todos = todos.filter(todo => todo.done);
        return todos;
    }

    return {
        addProject, deleteProject, getProjects, addTodo, deleteTodo,
        getProject, getAllTodos, getTodo, editTodo, getTodaysTodos,
        getWeeksTodos, getCompletedTodos
    };
}
