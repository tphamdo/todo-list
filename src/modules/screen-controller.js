import TodoController from "./todo-controller.js";
import NavItem from "./enums/nav-item.js";
import { format } from "date-fns";
import { trashSvg, editSvg } from "./svgs.js";

export default function ScreenController() {
  const app = TodoController();

  const projectsDiv = document.querySelector("#projects-container");
  const todosDiv = document.querySelector("#todo-container");
  const titleDiv = document.querySelector("#title-container");
  const allButton = document.querySelector("#allTodos");
  const todayButton = document.querySelector("#today");
  const weekButton = document.querySelector("#week");
  const completedButton = document.querySelector("#completed");
  const newTodoButton = document.querySelector(".add-todo");
  const newProjectButton = document.querySelector(".add-project");
  const todoForm = document.querySelector("#todo-form");
  const todoDialog = document.querySelector(".todo-dialog");
  const overlay = document.querySelector(".overlay");
  const formHeader = document.querySelector("#todo-form .header");
  const formTitle = document.querySelector("#todo-form #title");
  const formDueDate = document.querySelector("#todo-form #due-date");
  const formProject = document.querySelector("#todo-form #project");

  let selectedNavItem = NavItem.ALL;
  let selectedProjectName = null;

  // Load data from local storage or if none load dummy data
  app.init();

  function updateScreen() {
    // clear divs
    projectsDiv.textContent = "";
    todosDiv.textContent = "";
    formProject.textContent = "";

    updateProjects();
    updateContent();
  }

  function updateContent() {
    updateTitleDiv();
    updateTodosDiv();
  }

  function updateProjects() {
    let projects = app.getProjects();
    projects.forEach((project) => {
      projectsDiv.appendChild(createProjectElement(project));
      formProject.appendChild(createSelectOptionElement(project.name));
    });
    projectsDiv.addEventListener("click", handleProjectClick);
  }

  function updateTitleDiv() {
    var title;
    // clear current title
    titleDiv.textContent = "";

    switch (selectedNavItem) {
      case NavItem.ALL: // fall through
      case NavItem.TODAY:
      case NavItem.WEEK:
      case NavItem.COMPLETED:
        title = Symbol.keyFor(selectedNavItem);
        break;
      case NavItem.PROJECT:
        title = selectedProjectName ? selectedProjectName : "";
        break;
      default:
        return;
    }

    titleDiv.appendChild(createTitleElement(title));
  }

  function updateTodosDiv() {
    var todos;
    switch (selectedNavItem) {
      case NavItem.ALL:
        todos = app.getAllTodos();
        break;
      case NavItem.TODAY:
        todos = app.getTodaysTodos();
        break;
      case NavItem.WEEK:
        todos = app.getWeeksTodos();
        break;
      case NavItem.COMPLETED:
        todos = app.getCompletedTodos();
        break;
      case NavItem.PROJECT:
        todos = app.getProject(selectedProjectName).todos;
        break;
      default:
        return;
    }

    todos.sort((a, b) => a.dateAdded - b.dateAdded);
    todos.forEach((todo) => {
      todosDiv.appendChild(createTodoElement(todo));
    });
  }

  function createTodoElement(todo) {
    const div = document.createElement("div");
    const done = document.createElement("input");
    const title = document.createElement("p");
    const dueDate = document.createElement("p");
    const remove = document.createElement("button");
    const edit = document.createElement("button");

    div.classList.add("todo-item");
    if (todo.done) div.classList.add("done");
    div.dataset.projectName = todo.projectName;
    div.dataset.id = todo.id;
    done.setAttribute("type", "checkbox");
    done.checked = todo.done;
    done.addEventListener("change", handleTodoDoneStatusChange);
    title.textContent = todo.title;
    title.classList.add("title");
    dueDate.textContent = format(todo.dueDate, "MM/dd/yyyy");
    dueDate.classList.add("due-date");
    edit.innerHTML = editSvg;
    edit.addEventListener("click", handleEditTodoClick);
    edit.classList.add("edit");
    remove.innerHTML = trashSvg;
    remove.addEventListener("click", handleDeleteTodoItem);
    remove.classList.add("remove");
    div.appendChild(done);
    div.appendChild(title);
    div.appendChild(dueDate);
    div.appendChild(edit);
    div.appendChild(remove);

    return div;
  }

  function createProjectElement(project) {
    const b = document.createElement("button");
    b.textContent = project.name;
    b.dataset.name = project.name;
    b.classList.add("nav-item");
    b.classList.add("project-item");

    const deleteDiv = document.createElement("button");
    deleteDiv.classList.add("deleteContainer");
    deleteDiv.innerHTML = `
            <div class="right-button-panel icon">
                <i class="delete">&times;</i>
            </div>
        `;
    deleteDiv.addEventListener("click", handleDeleteProject);
    b.appendChild(deleteDiv);
    return b;
  }

  function createSelectOptionElement(optionName) {
    const o = document.createElement("option");
    o.setAttribute("value", optionName);
    o.textContent = optionName;
    return o;
  }

  function createTitleElement(title) {
    const h3 = document.createElement("h3");
    h3.textContent = title;
    return h3;
  }

  function handleNewTodoClick(event) {
    todoForm.addEventListener("submit", handleSubmitNewTodo);
    todoForm.removeEventListener("submit", handleSubmitEditTodo);

    overlay.classList.add("active");
    todoDialog.classList.add("active");
    formHeader.textContent = "New ToDo";
    formTitle.value = "";
    /* Use the currently selected project as the default
        project choice */
    if (selectedNavItem === NavItem.PROJECT) {
      formProject.value = selectedProjectName;
    } else {
      formProject.value = "";
      const projects = app.getProjects();
      if (projects.length) {
        formProject.value = projects[0].name;
      }
    }
  }

  function handleSubmitNewTodo(event) {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const dueDate = event.target.elements["due-date"].value;
    const projectName = event.target.elements.project.value;
    const todo = {
      title: title,
      dueDate: new Date(dueDate + "T23:59:59"),
      done: false,
      projectName: projectName,
    };

    app.addTodo(todo);
    overlay.classList.remove("active");
    todoDialog.classList.remove("active");
    updateScreen();
  }

  function handleCancelTodoDialog(event) {
    overlay.classList.remove("active");
    todoDialog.classList.remove("active");
    todoDialog.removeAttribute("data-projectName");
    todoDialog.removeAttribute("data-id");
  }

  function handleEditTodoClick(event) {
    todoForm.removeEventListener("submit", handleSubmitNewTodo);
    todoForm.addEventListener("submit", handleSubmitEditTodo);

    const todoElement = event.currentTarget.parentElement;
    const projectName = todoElement.dataset.projectName;
    const id = todoElement.dataset.id;
    const todo = app.getTodo(projectName, id);

    formHeader.textContent = "Edit ToDo";
    formTitle.value = todo.title;
    formDueDate.valueAsDate = new Date(
      todo.dueDate - todo.dueDate.getTimezoneOffset() * 60 * 1000,
    );
    formProject.value = todo.projectName;
    overlay.classList.add("active");
    todoDialog.classList.add("active");
    todoDialog.dataset.projectName = projectName;
    todoDialog.dataset.id = id;
  }

  function handleSubmitEditTodo(event) {
    event.preventDefault();

    const title = event.target.elements.title.value;
    const dueDate = event.target.elements["due-date"].value;
    const projectName = event.target.elements.project.value;
    const todo = {
      title: title,
      dueDate: new Date(dueDate + "T00:00:00"),
      projectName: projectName,
    };

    app.editTodo(todoDialog.dataset.projectName, todoDialog.dataset.id, todo);
    overlay.classList.remove("active");
    todoDialog.classList.remove("active");
    todoDialog.removeAttribute("data-projectName");
    todoDialog.removeAttribute("data-id");
    updateScreen();
  }

  function handleDeleteTodoItem(event) {
    const projectName = event.currentTarget.parentElement.dataset.projectName;
    const id = event.currentTarget.parentElement.dataset.id;
    app.deleteTodo(projectName, id);
    updateScreen();
  }

  function handleTodoDoneStatusChange(event) {
    const projectName = event.currentTarget.parentElement.dataset.projectName;
    const id = event.currentTarget.parentElement.dataset.id;
    app.editTodo(projectName, id, { done: this.checked });
    updateScreen();
  }

  function handleNewProjectClick(event) {
    let form = document.createElement("form");
    let input = document.createElement("input");
    /* overlay allows users to click out of form
        overlay used as a sibling of the form so that the
        z-index of the overlay and form can be used together */
    let overlay = document.createElement("div");

    form.classList.add("new-project");
    input.setAttribute("type", "text");
    input.setAttribute("name", "projectName");
    input.required = true;
    input.setAttribute("minlength", "3");
    input.setAttribute("maxlength", "20");
    input.classList.add("new-project");
    overlay.classList.add("overlay");

    form.appendChild(input);
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

    form.addEventListener("submit", handleSubmitNewProject);
    overlay.addEventListener("click", handleCancelNewProject);
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
    if (
      selectedNavItem === NavItem.PROJECT &&
      projectName === selectedProjectName
    ) {
      selectedNavItem = NavItem.ALL;
    }

    updateScreen();
  }

  function handleAllClick() {
    selectedNavItem = NavItem.ALL;
    updateScreen();
  }

  function handleTodayClick() {
    selectedNavItem = NavItem.TODAY;
    updateScreen();
  }

  function handleWeekClick() {
    selectedNavItem = NavItem.WEEK;
    updateScreen();
  }

  function handleCompletedClick() {
    selectedNavItem = NavItem.COMPLETED;
    updateScreen();
  }

  function clearTodoFormEventListeners() {}
  newTodoButton.addEventListener("click", handleNewTodoClick);
  overlay.addEventListener("click", handleCancelTodoDialog);
  newProjectButton.addEventListener("click", handleNewProjectClick);
  allButton.addEventListener("click", handleAllClick);
  todayButton.addEventListener("click", handleTodayClick);
  weekButton.addEventListener("click", handleWeekClick);
  completedButton.addEventListener("click", handleCompletedClick);

  // Initial render
  updateScreen();
}
