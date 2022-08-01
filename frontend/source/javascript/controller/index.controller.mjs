"use strict";

// Services
import { TaskService } from "../model/services/task.service.mjs";

// Views
import { IndexView } from "../view/index.view.mjs";

class IndexController {
    #privateView;
    #privateTaskService;

    constructor() {
        const headerData = ['id', 'idBoard', 'idColumn', 'name', 'description', 'deliveryDate','createdAt','updateAt'];
        this.#privateView = new IndexView(headerData);
        this.#privateTaskService = new TaskService();
    }

    async init() {
        await this.#privateTaskService.loadTasksByBoard();
        this.#privateView.Data = this.#privateTaskService.getTasksByBoard();
        this.#privateView.init();
    }

}

export const index = new IndexController();
index.init();