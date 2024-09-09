import Project from "./project.js";
import Todo from "./todo.js";
import {
  isToday,
  addWeeks,
  isWithinInterval,
  startOfDay,
  endOfDay,
} from "date-fns";
import storageAvailable from "./storage.js";
import sampleTodoList from "./data/sample-todo-list.js";

export default function TodoManager() {
  const projects = [];

  const init = function () {
    if (storageAvailable("localStorage")) {
      let projects = localStorage.getItem("projectNames");
      let todos = localStorage.getItem("todos");

      if (todos && projects) {
        projects = JSON.parse(projects);
        projects.forEach((project) => addProject(project));
        todos = JSON.parse(todos);
        todos.forEach((todo) => addTodo(todo));
        return;
      }
    }

    sampleTodoList.forEach((todo) => {
      addTodo(todo);
    });
  };

  const addProject = function (name) {
    let idx = projects.findIndex((p) => p.name == name);

    // project must have a new name
    if (idx !== -1) return;

    let project = new Project(name);
    projects.push(project);
    updateStorage();
    return project;
  };

  const deleteProject = function (projectName) {
    if (!projectName) return;

    let idx = projects.findIndex((p) => p.name == projectName);

    // break if project is not found
    if (idx === -1) return;

    projects.splice(idx, 1);
    updateStorage();
  };

  const addTodo = function (todoJSON) {
    if (!todoJSON) return;

    let idx = projects.findIndex((p) => p.name == todoJSON.projectName);

    // create new project if it does not yet exist
    if (idx === -1) {
      let project = addProject(todoJSON.projectName);
      project.addTodo(new Todo(todoJSON));
      return;
    }

    let project = projects[idx];
    project.addTodo(new Todo(todoJSON));
    updateStorage();
  };

  const deleteTodo = function (projectName, todoId) {
    if (!projectName || !todoId) return;

    let idx = projects.findIndex((p) => p.name == projectName);

    // break if project is not found
    if (idx === -1) return;

    let project = projects[idx];
    project.deleteTodo(todoId);
    updateStorage();
  };

  const getTodo = function (projectName, todoId) {
    if (!projectName || !todoId) return null;

    let idx = projects.findIndex((p) => p.name == projectName);

    // break if project is not found
    if (idx === -1) return null;

    let project = projects[idx];
    return project.getTodo(todoId);
  };

  const editTodo = function (projectName, todoId, updatedTodoJSON) {
    const curTodo = getTodo(projectName, todoId);
    if (!curTodo) return;

    const targetProjectName = updatedTodoJSON.projectName;
    if (targetProjectName && curTodo.projectName !== targetProjectName) {
      const targetProject = getProject(targetProjectName);
      const curProject = getProject(curTodo.projectName);
      if (!targetProject || !curProject) return;

      curProject.deleteTodo(todoId);
      curTodo.edit(updatedTodoJSON);
      targetProject.addTodo(curTodo);
    } else {
      curTodo.edit(updatedTodoJSON);
    }

    updateStorage();
  };

  const getProjects = () => projects;

  const getProject = function (projectName) {
    if (!projectName) return null;

    let idx = projects.findIndex((p) => p.name == projectName);

    // break if project is not found
    if (idx === -1) return null;

    return projects[idx];
  };

  const getAllTodos = () => {
    let todos = [];
    projects.forEach((project) => {
      todos.push(...project.todos);
    });
    return todos;
  };

  const getTodaysTodos = () => {
    let todos = getAllTodos();
    todos = todos.filter((todo) => isToday(todo.dueDate));
    return todos;
  };

  const getWeeksTodos = () => {
    let todos = getAllTodos();
    let today = startOfDay(new Date());
    let oneWeek = endOfDay(addWeeks(today, 1));
    todos = todos.filter((todo) =>
      isWithinInterval(todo.dueDate, { start: today, end: oneWeek }),
    );
    return todos;
  };

  const getCompletedTodos = () => {
    let todos = getAllTodos();
    todos = todos.filter((todo) => todo.done);
    return todos;
  };

  const updateStorage = () => {
    const todos = getAllTodos();
    const projectNames = projects.map((project) => project.name);
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("projectNames", JSON.stringify(projectNames));
  };

  return {
    addProject,
    deleteProject,
    getProjects,
    addTodo,
    deleteTodo,
    getProject,
    getAllTodos,
    getTodo,
    editTodo,
    getTodaysTodos,
    getWeeksTodos,
    getCompletedTodos,
    init,
  };
}
