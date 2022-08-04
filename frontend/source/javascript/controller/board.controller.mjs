"use strict";

// Services
import { BoardService } from "../model/services/board.service.mjs";
// Views
import { BoardView } from "../view/board.view.mjs";

class BoardController {
    #boardView;
    #boardService;

    constructor() {
        this.#boardView = new BoardView(this);
        this.#boardService = new BoardService();
    }

    async init() {
        const params = new URLSearchParams(window.location.search);
        const taskId = params.get("id");
        await this.#boardService.loadBoardById(taskId);
        console.log(this.#boardService.getBoardById());        
        this.#boardView.Data = this.#boardService.getBoardById();
        this.#boardView.init();
    }

    // async createBoard(bodyForm) {
    //     await this.#boardService.create(bodyForm);
    // }

    // async deleteBoard(idBoard) {
    //     await this.#boardService.delete(idBoard);
    // }

    // async updateBoard(idBoard, bodyForm) {
    //     await this.#boardService.update(idBoard, bodyForm);
    // }

}

export const board = new BoardController();
board.init();