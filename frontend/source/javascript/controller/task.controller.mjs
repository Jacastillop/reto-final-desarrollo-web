"use strict";

// Services
import { TaskService } from "../model/services/task.service.mjs";

// Views
import { TaskView } from "../view/task.view.mjs";

class TaskController {
    #view;
    #taskService;

    constructor() {
        this.#view = new TaskView();
        this.#taskService = new TaskService();
    }

    async init() {
        await this.#taskService.loadTaskById(6);
        this.#view.Data = this.#taskService.getTaskById();
        this.#view.init();
    }

}

export const task = new TaskController();
task.init();