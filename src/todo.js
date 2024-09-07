export default class Todo {
    constructor(title, descr, dueDate, priority, done, project='') {
        this.title = title;
        this.descr = descr;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
        this.project = project;
    }
}

