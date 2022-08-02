"use strict";

import { TaskModel } from "../model/task.model.mjs";

export class ColumnModel {
    #id;
    #name;
    #createdAt;
    #updateAt;
    #tasks;

    constructor(data) {
        this.#id = data.id;
        this.#name = data.name;
        this.#createdAt = new Date(data.createdAt).toLocaleString();
        this.#updateAt = new Date(data.updatedAt).toLocaleString();
        this.#tasks = this.#toArrayTask(data.task);
    }

    getValues() {
        return {
            id: this.#id,
            name: this.#name,
            createdAt: this.#createdAt,
            updateAt: this.#updateAt,
            tasks: this.#tasks,
        };
    }

    #toArrayTask(data) {
        const arrayTask = [];
        data.forEach((item) => {
            const task = new TaskModel(item);
            arrayTask.push(task);
        });
        return arrayTask;
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get Name() {
        return this.#name;
    }

    set Name(name) {
        this.#name = name;
    }

    get CreatedAt() {
        return this.#createdAt;
    }

    set CreatedAt(createdAt) {
        this.#createdAt = createdAt;
    }

    get UpdateAt() {
        return this.#updateAt;
    }

    set UpdateAt(updateAt) {
        this.#updateAt = updateAt;
    }

    get Tasks() {
        return this.#tasks;
    }

    set Tasks(tasks) {
        this.#tasks = tasks;
    }

}
