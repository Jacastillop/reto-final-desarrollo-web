import { Config } from "../../config.mjs";

export class Table {

    #privateTable;
    #privateHeader;
    #privateData;

    constructor(header) {
        this.#privateData = [];
        this.#privateHeader = header;
    }

    get() {
        this.#privateGenerateTable();
        return this.#privateTable;
    }

    set Data(data) {
        this.#privateData = data;
    }

    #privateGenerateTable() {
        const table = document.createElement('table');
        table.classList.add('table');
        const thead = this.#privateCreateHeader(document.createElement('thead'));
        const tbody = this.#privateCreateBody(document.createElement('tbody'));
        table.append(thead, tbody);
        this.#privateTable = table;
    }

    #privateCreateHeader(thead) {
        const tr = document.createElement('tr');
        this.#privateHeader.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            tr.append(th);
        });
        thead.append(tr);
        return thead;
    }

    #privateCreateBody(tbody) {
        this.#privateData.forEach(item => {
            item = item.getValues();

            const tr = document.createElement('tr');

            const tdId = document.createElement('td');
            tdId.textContent = item.id;

            const tdIdColumn = document.createElement('td');
            tdIdColumn.textContent = item.idColumn;

            const tdIdBoard = document.createElement('td');
            tdIdBoard.textContent = item.idBoard;

            const tdName = document.createElement('td');
            tdName.textContent = item.name;

            const tdDescription = document.createElement('td');
            tdDescription.textContent = item.description;

            const tdDeliveryDate = document.createElement('td');
            tdDeliveryDate.textContent = item.deliveryDate;

            const tdCreatedAt = document.createElement('td');
            tdCreatedAt.textContent = item.createdAt;

            const tdUpdatedAt = document.createElement('td');
            tdUpdatedAt.textContent = item.updatedAt;

            const tdAcciones = this.#privateAcciones(document.createElement('td'), item.id);

            tr.append(tdId, tdIdColumn, tdIdBoard, tdName, tdDescription,tdDeliveryDate,tdCreatedAt,tdUpdatedAt,tdAcciones);
            tbody.append(tr);
        });

        return tbody;
    }

    #privateAcciones(td, id) {
        const div = document.createElement('div');
        div.classList.add('btn-group');

        const buttonUpdate = document.createElement('a');
        buttonUpdate.classList.add('btn', 'btn-primary');
        buttonUpdate.textContent = 'Update';
        buttonUpdate.href = `${Config.FrontendURL}/update.html?id=${id}`;

        const buttonDelete = document.createElement('button');
        buttonDelete.type = 'button';
        buttonDelete.classList.add('btn', 'btn-danger');
        buttonDelete.textContent = 'Delete';

        div.append(buttonUpdate, buttonDelete);
        td.append(div);

        return td;
    }
}