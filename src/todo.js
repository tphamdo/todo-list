export default class Todo {
    constructor(title, descr, dueDate, priority, done, projectName='') {
        this.title = title;
        this.descr = descr;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
        this.projectName = projectName
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

