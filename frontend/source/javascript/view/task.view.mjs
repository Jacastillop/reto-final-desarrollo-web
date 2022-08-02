"use strict";

import { Card } from "./components/card.component.mjs";
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
    this.#body = document.querySelector('#body');
    this.#container = document.querySelector("#container");
    this.#card = new Card();
    this.#table = new Table(headerLogs);
    this.#navbar = new Navbar();
  }

  get Data() {
    return this.#data;
  }

  set Data(data) {
    this.#data = data;
  }

  init() {
    this.#body.prepend(this.#navbar.get());
    this.#card.Data = this.#data;
    this.#card.addList();
    this.#card.addActions();
    this.#table.Data = this.#data.Logs;
    this.#container.innerHTML = `
        <div class="row">
            <div class="col-sm-4">
            ${this.#card.create()}
            </div>
            <div class="col-sm-8 table-responsive">
            <table class="table table-bordered">
            ${this.#table.get().innerHTML}
            </table>
            </div>
        </div>
      `;
  }
}
