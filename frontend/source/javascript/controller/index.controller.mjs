"use strict";

// Services
import { TaskService } from "../model/services/task.service.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

class IndexController {
  #privateView;
  #privateTaskService;

  constructor() {
    const headerData = [
      "id",
      "idColumn",
      "idBoard",
      "name",
      "description",
      "deliveryDate",
      "createdAt",
      "updateAt",
    ];
    this.#privateView = new IndexView(headerData);
    this.#privateTaskService = new TaskService();
  }

  async init() {
    await this.#privateTaskService.loadTasksByBoard(1);
    this.#privateView.Data = this.#privateTaskService.getTasksByBoard();
    this.#privateView.init();
  }
}

export const index = new IndexController();
index.init();
