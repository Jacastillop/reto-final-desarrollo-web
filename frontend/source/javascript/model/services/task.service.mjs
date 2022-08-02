import { Config } from "../../config.mjs";
import { TaskModel } from "../task.model.mjs";

export class TaskService {
    #tasksByBoard;
    #taskById;

    constructor() {
        this.#tasksByBoard = [];
    }

    async loadTasksByBoard(idBoard) {
        const response = await fetch(
            `${Config.BackendURL}task/task-board/${idBoard}`
        );
        const { data } = await response.json();
        data.forEach((item) => {
            const task = new TaskModel(item);
            this.#tasksByBoard.push(task);
        });
    }

    getTasksByBoard() {
        return this.#tasksByBoard;
    }

    async loadTaskById(id) {
        const response = await fetch(`${Config.BackendURL}task/${id}`);
        debugger;
        const { data } = await response.json();
        this.#taskById = new TaskModel(data);
    }

    getTaskById() {
        return this.#taskById;
    }

    async update(id, data) {
        await fetch(`${Config.BackendURL}/usuario/records/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }).then((response) => response.json());
    }
}
