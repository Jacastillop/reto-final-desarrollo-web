"use strict";

import { Card } from "./components/cardBoard.component.mjs";
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
        let gridCard = ``;
        this.#data.Columns.forEach((columns) => {
          let card = new Card(this.#controller);
          card.Data = columns;
          card.addActions();
          gridCard += `
            <div class="col">
              ${card.create(true)}
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