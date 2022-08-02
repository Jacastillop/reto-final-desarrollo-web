import { Config } from "../../config.mjs";
import { BoardModel } from "../board.model.mjs";

export class BoardService {
    #boards;
    #taskById;

    constructor() {
        this.#boards = [];
     }

    async loadBoards() {
        const response = await fetch(`${Config.BackendURL}boards`)        
        const { data } = await response.json(); 
        console.log(data)
        data.forEach(item => {
            const board = new BoardModel(item);
            this.#boards.push(board);
        });
    }

    getBoards(){
        return this.#boards;
    }

    async loadTaskById(id) {
        const response = await fetch(`${Config.BackendURL}task/${id}`);
        const { data } = await response.json();
        this.#taskById = new TaskModel(data);
    }

    getTaskById(){
        return this.#taskById;
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