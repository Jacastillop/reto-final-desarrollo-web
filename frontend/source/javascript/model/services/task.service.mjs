import { Config } from "../../config.mjs";
import { TaskModel } from "../task.model.mjs";

export class TaskService {
    #tasks;

    constructor() {
        this.#tasks = [];
     }

    async loadTasksByBoard() {
        const response = await fetch(`${Config.BackendURL}/1`)
        // .then(response => response.json());
        const { data } = await response.json(); 
        data.forEach(item => {
            const task = new TaskModel(item);
            this.#tasks.push(task);
        });
        return this.#tasks;
    }

    getTasksByBoard(){
        return this.#tasks;
    }

    async getUserById(id) {
        const data = await fetch(`${Config.BackendURL}/usuario/records/${id}`).then(response => response.json());
        return new UserModel(data);
    }

    async update(id, data) {
        await fetch(
            `${Config.BackendURL}/usuario/records/${id}`,
            {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data),
            }
        ).then(response => response.json());
    }

}