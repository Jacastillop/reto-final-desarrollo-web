"use strict";

import { CardTask } from "./components/cardTask.component.mjs";
import { Table } from "./components/table.component.mjs";
import { Navbar } from "./components/navbar.component.mjs";

export class TaskView {
  #body;
  #container;
  #card;
  #table;
  #data;
  #navbar;

  constructor() {
    const headerLogs = [
      "id",
      "idTask",
      "Column Previous",
      "Column Current",
      "Date",
    ];
    this.#body = document.querySelector("#body");
    this.#container = document.querySelector("#container");
    this.#card = new CardTask();
    this.#table = new Table(headerLogs);
    this.#navbar = new Navbar();
  }

  init() {
    this.#body.prepend(this.#navbar.get());
    this.#card.Data = this.#data;
    this.#table.Data = this.#data.Logs;
    this.#container.innerHTML = `
        <div class="row">
            <div class="col-sm-4">
            ${this.#card.createTaskDetailsCard()}
            </div>
            <div class="col-sm-8 table-responsive">
            <table class="table table-bordered">
            ${this.#table.get().innerHTML}
            </table>
            </div>
        </div>
      `;
  }

  get Data() {
    return this.#data;
  }

  set Data(data) {
    this.#data = data;
  }
}
