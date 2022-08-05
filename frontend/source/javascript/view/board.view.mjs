"use strict";

import { CardBoard } from "./components/cardBoard.component.mjs";
import { CardTask } from "./components/cardTask.component.mjs";
import { Navbar } from "./components/navbar.component.mjs";

export class BoardView {
    #body;
    #container;
    #navbar;
    #data;
    #controller;

    constructor(boardController) {
        this.#body = document.querySelector('#body');
        this.#container = document.querySelector("#container");
        this.#navbar = new Navbar();
        this.#controller = boardController;
    }

    init() {
        this.#body.prepend(this.#navbar.get());
        this.#container.innerHTML = `
        <div class="card-group">
            ${this.#createGridColumns()}
        </div>   
        `;
    }

    #createGridColumns(){
        let gridColumns = ``;
        this.#data.Columns.forEach((column) => {
          const columnCard = new CardBoard(this.#controller);
          const gridTasks = this.#createGridTasks(column);
          columnCard.Data = column;
          gridColumns += `
            <div class="col">
              ${columnCard.createCardBoard(gridTasks)}
            </div>
          `;
        });
        return gridColumns;
    }

    #createGridTasks(column){
        let gridCard = ``;
        column.Tasks.forEach((task) => {
          let card = new CardTask(this.#controller);
          card.Data = task;
          gridCard += `
            <div class="col">
              ${card.createTaskCard()}
            </div>
          `;
        });
        return gridCard;
    }


    get Data() {
        return this.#data;
    }

    set Data(data) {
        this.#data = data;
    }

}