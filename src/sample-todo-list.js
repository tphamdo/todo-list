import Priority from "./priority.js"

const todoList = [
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

export default todoList
