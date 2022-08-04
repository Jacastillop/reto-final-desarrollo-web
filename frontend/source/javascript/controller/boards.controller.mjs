"use strict";

// Services
import { BoardService } from "../model/services/board.service.mjs";

// Views
import { BoardsView } from "../view/boards.view.mjs";

class BoardsController {
  #privateView;
  #boardService;

  constructor() {
    this.#privateView = new BoardsView(this);
    this.#boardService = new BoardService();
  }

  async init() {
    await this.#boardService.loadBoards();
    this.#privateView.Data = this.#boardService.getBoards();
    this.#privateView.init();
  }

  async createBoard(bodyForm){
    await this.#boardService.create(bodyForm);
  }

  async deleteBoard(idBoard){
    await this.#boardService.delete(idBoard);
  }

  async updateBoard(idBoard,bodyForm){
    await this.#boardService.update(idBoard,bodyForm);
  }

}

export const boards = new BoardsController();
boards.init();
