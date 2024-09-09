import { addDays } from "date-fns";
const today = new Date()
const in3Days = addDays(new Date(), 3);
const oneWeek = addDays(new Date(), 7);
const twoWeeks = addDays(new Date(), 7*2);
const fourWeeks = addDays(new Date(), 7*4);

const todoList = [
    {
        title: "Meditate for 10 minutes",
        dueDate: today,
        done: true,
        projectName: "Habits",
    },
    {
        title: "Go to the gym",
        dueDate: today,
        done: false,
        projectName: "Habits"
    },
    {
        title: "Take out the trash",
        dueDate: in3Days,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Go on a walk",
        dueDate: today,
        done: true,
        projectName: "Habits",
    },
    {
        title: "Do the dishes",
        dueDate: today,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Replace the air filter",
        dueDate: oneWeek,
        done: false,
        projectName: "Chores"
    },
    {
        title: "Finish Javascript Course",
        dueDate: twoWeeks,
        done: false,
        projectName: "The Odin Project"
    },
    {
        title: "Finish React Course",
        dueDate: fourWeeks,
        done: false,
        projectName: "The Odin Project"
    },
    {
        title: "Video Call Jules",
        dueDate: today,
        done: true,
        projectName: "Habits",
    },
];

export default todoList
