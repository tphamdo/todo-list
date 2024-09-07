import Priority from "../enums/priority.js";
import { addDays } from "date-fns";
const today = new Date()
const in3Days = addDays(new Date(), 3);
const nextWeek = addDays(new Date(), 7);

const todoList = [
    {
        title: "Go on a walk",
        description: "",
        dueDate: today,
        priority: Priority.HIGH,
        done: false,
        projectName: "Habits",
    },
    {
        title: "Meditate for 10 minutes",
        description: "",
        dueDate: today,
        priority: Priority.HIGH,
        done: true,
        projectName: "Habits",
    },
    {
        title: "Go to the gym",
        description: "",
        dueDate: today,
        priority: Priority.HIGH,
        done: false,
        projectName: "Habits"
    },
    {
        title: "Take out the trash",
        description: "",
        dueDate: in3Days,
        priority: Priority.MEDIUM,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Do the dishes",
        description: "",
        dueDate: today,
        priority: Priority.MEDIUM,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Replace the air filter",
        description: "",
        dueDate: today,
        priority: Priority.HIGH,
        done: false,
        projectName: "Chores"
    },
];

export default todoList
