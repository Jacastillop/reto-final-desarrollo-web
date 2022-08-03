"use strict";

import { ColumnModel } from "../model/column.model.mjs";

export class BoardModel {
    #id;
    #name;
    #createdAt;
    #updateAt;
    #columns;

    constructor(data) {
        this.#id = data.id;
        this.#name = data.name;
        this.#createdAt = this.#formatDate(data.createdAt);
        this.#updateAt = this.#formatDate(data.updatedAt);        
        this.#columns = this.#toArrayColumns(data.columnsForBoard);
    }

    getValues() {
        return {
            id: this.#id,
            name: this.#name,
            createdAt: this.#createdAt,
            updateAt: this.#updateAt,
            columns: this.#columns,
        };
    }

    #formatDate(date){
        return (date===null) ? "- - -" : new Date(date).toLocaleString(); 
    }

    #toArrayColumns(data) {
        const arrayColumns = [];
        data.forEach((item) => {
            const column = new ColumnModel(item["column"]);
            arrayColumns.push(column);
        });
        return arrayColumns;
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get Name() {
        return this.#name;
    }

    set Name(name) {
        this.#name = name;
    }

    get CreatedAt() {
        return this.#createdAt;
    }

    set CreatedAt(createdAt) {
        this.#createdAt = createdAt;
    }

    get UpdateAt() {
        return this.#updateAt;
    }

    set UpdateAt(updateAt) {
        this.#updateAt = updateAt;
    }

    get Columns() {
        return this.#columns;
    }

    set Columns(columns) {
        this.#columns = columns;
    }

}
