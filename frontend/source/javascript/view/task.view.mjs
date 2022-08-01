'use strict';

import { Card } from "./components/card.component.mjs";
import { Table } from "./components/table.component.mjs";

export class TaskView {
    #container;
    #card;
    #table;
    #data;

    constructor() {
        const headerLogs = ["id","idTask","Column Previous","Column Current","Date"]
        this.#container = document.querySelector('#container');
        this.#card = new Card();
        this.#table = new Table(headerLogs);
    }

    get Data(){
        return this.#data;
    }

    set Data(data) {
        this.#data = data;
    }

    init() {
        this.#card.Data = this.#data;
        this.#table.Data = this.#data.Logs;        
        console.log(this.#table.get().innerHTML)
        this.#container.innerHTML = `
        <div class="row">
            <div class="col-sm-6">
            ${this.#card.create()}
            </div>
            <div class="col-sm-6">
            <table class="table">
            ${this.#table.get().innerHTML}
            </table>
            </div>
        </div>
      ` 
    }

}