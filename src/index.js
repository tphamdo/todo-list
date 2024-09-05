import createTodoItem from "./todo.js"
import Priority from "./priority.js"
import TodoController from "./todoController.js"

let todoList = [
    {
        title: "A",
        description: "A descr", 
        dueDate: "9-23-2024",
        priority: Priority.MEDIUM,
        done: false,
    },
    {
        title: "B",
        description: "B desciprtion", 
        dueDate: "9-24",
        priority: Priority.LOW,
        done: false,
    },
    {
        title: "C",
        description: "C description", 
        dueDate: "9-25",
        priority: Priority.HIGH,
        done: true,
    },
];

let todoController = TodoController();
todoController.addProject("project 1");
todoController.addProject("project 1");
todoController.addProject("project 2");
console.log(todoController.getProjects()[0].todos);

todoController.addTodo("project 1", todoList[0]);
todoController.addTodo("project 1", todoList[1]);
todoController.addTodo("project 1", todoList[2]);
todoController.addTodo("project 1", todoList[0]);
todoController.addTodo("project 1", todoList[1]);
todoController.addTodo("project 1", todoList[2]);
console.log(todoController.getProjects()[0].todos);

todoController.deleteTodo("project 1", 4);
todoController.deleteTodo("project 1", 4);
todoController.deleteTodo("project 1", 3);
console.log(todoController.getProjects()[0].todos);

todoController.deleteProject("project 1");
todoController.deleteProject("project 2");
console.log(todoController.getProjects());
