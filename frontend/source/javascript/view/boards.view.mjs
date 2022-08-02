"use strict";

import { Config } from "../config.mjs";
import { Card } from "./components/card.component.mjs";
import { Navbar } from "./components/navbar.component.mjs";

export class BoardsView {
  #body;
  #container;
  #gridCards;
  #data;
  #navbar;

  constructor() {
    this.#body = document.querySelector("#body");
    this.#container = document.querySelector("#container");
    this.#navbar = new Navbar();
  }

  init() {
    this.#body.prepend(this.#navbar.get());
    this.#container.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="d-grid gap-2 col-8 mx-auto">
            <a class="btn btn-primary" href="${Config.FrontendURL}/update.html?id=0"><i class="bi bi-plus-circle"></i> add Board</a>
          </div>
        </div>
        ${this.#createGridCards()}
      </div>
      `;
  }

  #createGridCards() {
    let gridCard = ``;
    this.#data.forEach((board) => {
      let card = new Card();
      card.Data = board;
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
