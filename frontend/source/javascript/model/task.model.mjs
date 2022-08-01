"use strict";

export class TaskModel {
    #id;
    #idColumn;
    #idBoard;
    #name;
    #description;
    #deliveryDate;
    #createdAt;
    #updateAt;
    #logs;

    constructor(data) {
        if (data) {
            this.#id = data.id;
            this.#idColumn = data.idColumn;
            this.#idBoard = data.idBoard;
            this.#name = data.name;
            this.#description = data.description;
            this.#deliveryDate = data.deliveryDate;
            this.#createdAt = data.createdAt;
            this.#updateAt = data.updateAt;
            this.#logs = data.logs;
        }
    }

    get Id() {
        return this.#id;
    }

    set Id(id) {
        this.#id = id;
    }

    get idColumn() {
        return this.#idColumn;
    }

    set idColumn(idColumn) {
        this.#idColumn = idColumn;
    }

    get idBoard() {
        return this.#idBoard;
    }

    set idBoard(idBoard) {
        this.#idBoard = idBoard;
    }

    get Name() {
        return this.#name;
    }

    set Name(name) {
        this.#name = name;
    }

    get Description() {
        return this.#description;
    }

    set Description(description) {
        this.#description = description;
    }

    get DeliveryDate() {
        return this.#deliveryDate;
    }

    set DeliveryDate(deliveryDate) {
        this.#deliveryDate = deliveryDate;
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

    get Logs(){
        return this.#logs;
    }

    set Logs(logs){
        this.#logs = logs;
    }

    getValues() {
        return {
            id: this.#id,
            idColumn: this.#idColumn,
            idBoard: this.#idBoard,
            name: this.#name,
            description: this.#description,
            deliveryDate: this.#deliveryDate,
            createdAt: this.#createdAt,
            updateAt: this.#updateAt,
            logs: this.#logs
        };
    }
}
