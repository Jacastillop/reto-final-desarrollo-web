"use strict";

import { Card } from "./components/cardBoard.component.mjs";
import { Navbar } from "./components/navbar.component.mjs";
import { Modal } from "./components/modalBoard.component.mjs";

export class BoardsView {
  #body;
  #container;
  #navbar;
  #modalCreate;
  #modalUpdate;
  #controller;
  #data;

  constructor(boardController) {
    this.#controller = boardController;
    this.#body = document.querySelector("#body");
    this.#container = document.querySelector("#container");
    this.#navbar = new Navbar();
    this.#modalCreate = new Modal("Create", boardController);
    this.#modalUpdate = new Modal("Update", boardController);
  }

  init() {
    this.#body.prepend(this.#navbar.get());
    this.#container.innerHTML = `
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        <div class="col">
          <div class="d-grid gap-2 col-8 mx-auto">
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalCreate"><i class="bi bi-plus-circle"></i> add Board</button>
          </div>
        </div>
        ${this.#createGridCards()}
      </div>      
      ${this.#modalCreate.get()}
      ${this.#modalUpdate.get()}
      `;
    this.#modalCreate.loadEvents();
    this.#modalUpdate.loadEvents();
    this.#eventDeletButton(this.#controller);
    this.#eventEditButton();
  }

  #createGridCards() {
    let gridCard = ``;
    this.#data.forEach((board) => {
      let card = new Card(this.#controller);
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

  #eventDeletButton(controller) {
    const botones = document.querySelectorAll("#deleteButton");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        controller.deleteBoard(boton.name);
        setTimeout(() => {location.reload();}, 500);
      });
    });
  }

  #eventEditButton() {
    const botones = document.querySelectorAll("#editButton");
    botones.forEach((boton) => {
      boton.addEventListener("click", () => {
        const myForm = document.querySelector("#formUpdate");
        myForm.name=boton.name;
      });
    });
  }

  get Data() {
    return this.#data;
  }

  set Data(data) {
    this.#data = data;
  }
}
