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
        if (!todoId && todoId !== 0) return;

        let idx = this.#todos.findIndex(t => t.id == todoId)

        // break if todo is not found
        if (idx === -1) return;

        this.#todos.splice(idx, 1);
    }

    getTodo(todoId) {
        if (!todoId && todoId !== 0) return null;

        let idx = this.#todos.findIndex(t => t.id == todoId)

        // return null if todo is not found
        if (idx === -1) return null;

        return this.#todos[idx];
    }

    get todos() { return this.#todos; }
}
