"use strict";

export class LogModel {
    #id;
    #idTask;
    #idColumnPrevious;
    #idColumnCurrent;
    #createdAt;

    constructor(data) {
        if (data) {
            this.#id = data.id;
            this.#idTask = data.idTask;
            this.#idColumnPrevious = data.idColumnPrevious;
            this.#idColumnCurrent = data.idColumnCurrent;
            this.#createdAt = new Date(data.createdAt).toLocaleString();
        }
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get idTask() {
        return this.#idTask;
    }

    set idTask(idTask) {
        this.#idTask = idTask;
    }

    get idColumnPrevious() {
        return this.#idColumnPrevious;
    }

    set idColumnPrevious(idColumnPrevious) {
        this.#idColumnPrevious = idColumnPrevious;
    }

    get idColumnCurrent() {
        return this.#idColumnCurrent;
    }

    set idColumnCurrent(idColumnCurrent) {
        this.#idColumnCurrent = idColumnCurrent;
    }

    get createdAt() {
        return this.#createdAt;
    }

    set createdAt(createdAt) {
        this.#createdAt = createdAt;
    }

    

    getValues() {
        return {
            id: this.#id,
            idTask: this.#idTask,
            idColumnPrevious: this.#idColumnPrevious,
            idColumnCurrent: this.#idColumnCurrent,
            createdAt: this.#createdAt
        };
    }
}
