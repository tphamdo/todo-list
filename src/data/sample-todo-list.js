import Priority from "../enums/priority.js";
import { addDays } from "date-fns";
const today = new Date()
const in3Days = addDays(new Date(), 3);
const oneWeek = addDays(new Date(), 7);
const twoWeeks = addDays(new Date(), 7*2);
const fourWeeks = addDays(new Date(), 7*4);

const todoList = [
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
        title: "Go on a walk",
        description: "",
        dueDate: today,
        priority: Priority.HIGH,
        done: true,
        projectName: "Habits",
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
        dueDate: oneWeek,
        priority: Priority.HIGH,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Finish Javascript Course",
        description: "",
        dueDate: twoWeeks,
        priority: Priority.HIGH,
        done: false,
        projectName: "The Odin Project"
    },
    {
        title: "Finish React Course",
        description: "",
        dueDate: fourWeeks,
        priority: Priority.HIGH,
        done: false,
        projectName: "The Odin Project"
    },
];

export default todoList
