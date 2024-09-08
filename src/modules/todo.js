export default class Todo {
    constructor(todoJSON) {
        this.title = todoJSON.title;
        this.descr = todoJSON.descr;
        this.dueDate = new Date(todoJSON.dueDate);
        this.priority = todoJSON.priority;
        this.done = todoJSON.done;
        this.projectName = todoJSON.projectName;
        this.dateAdded = todoJSON.dateAdded ? new Date(todoJSON.dateAdded) : new Date();
    }

    edit(todoJSON) {
        if ('title' in todoJSON) this.title = todoJSON.title;
        if ('descr' in todoJSON) this.descr = todoJSON.descr;
        if ('dueDate' in todoJSON) this.dueDate = todoJSON.dueDate;
        if ('priority' in todoJSON) this.priority = todoJSON.priority;
        if ('done' in todoJSON) this.done = todoJSON.done;
        if ('projectName' in todoJSON) this.projectName = todoJSON.projectName;
    }
}

