"use strict";

import { Config } from "../config.mjs";
import { Card } from "./components/card.component.mjs";
import { Navbar } from "./components/navbar.component.mjs";
import { Modal } from "./components/modal.component.mjs"

export class BoardsView {
  #body;
  #container;
  #navbar;
  #data;
  #modal;

  constructor() {
    this.#body = document.querySelector("#body");
    this.#container = document.querySelector("#container");
    this.#navbar = new Navbar();
    this.#modal = new Modal("board");
  }

  init() {
    this.#body.prepend(this.#navbar.get());
    this.#container.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="d-grid gap-2 col-8 mx-auto">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="bi bi-plus-circle"></i> add Board</button>
          </div>
        </div>
        ${this.#createGridCards()}
      </div>      
      ${this.#modal.get()}
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
