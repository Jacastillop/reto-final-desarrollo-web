'use strict';

import { Navbar } from "./components/navbar.component.mjs";
import { Table } from "./components/table.component.mjs";

export class IndexView {
    #body;
    #privateContainer;
    #privateNavbar;
    #privateTable;
    #privateData;

    constructor(header) {
        this.#body = document.querySelector('#body');
        this.#privateContainer = document.querySelector('#container');
        this.#privateNavbar = new Navbar();
        this.#privateTable = new Table(header);
    }

    get Data(){
        return this.#privateData;
    }

    set Data(data) {
        this.#privateData = data;
    }

    init() {
        this.#body.prepend(this.#privateNavbar.get());
        this.#privateTable.Data = this.#privateData;
        this.#privateTable.addActions();
        this.#privateContainer.append(
            this.#privateTable.get()
        );
    }

}