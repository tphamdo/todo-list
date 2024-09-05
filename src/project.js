export default class Project {
    #todos = [];
    #nextTodoId = 0;

    constructor(name) {
        this.name = name;
    }

    addTodo(todo) { 
        if (!todo) return;
        let todoWithId = Object.assign(todo, { id: this.#nextTodoId++ })
        this.#todos.push(todoWithId);
    }

    deleteTodo(todoId) {
        if (!todoId) return;

        let idx = this.#todos.findIndex( t => t.id === todoId) 

        // break if todo is not found
        if (idx === -1) return;

        this.#todos.splice(idx, 1);
    }

    get todos() { return this.#todos; }
    // get name() { return this.name; }
    // set name(value) { this.name = value; }
}
