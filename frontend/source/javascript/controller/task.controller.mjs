"use strict";

// Services
import { TaskService } from "../model/services/task.service.mjs";

// Views
import { TaskView } from "../view/task.view.mjs";

class TaskController {
    #taskView;
    #taskService;

    constructor() {
        this.#taskView = new TaskView();
        this.#taskService = new TaskService();
    }

    async init() {
        const params = new URLSearchParams(window.location.search);
        const taskId = params.get("id");
        await this.#taskService.loadTaskById(taskId);
        this.#taskView.Data = this.#taskService.getTaskById();
        this.#taskView.init();
    }

}

export const task = new TaskController();
task.init();