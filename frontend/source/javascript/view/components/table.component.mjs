import { Config } from "../../config.mjs";

export class Table {
  #table;
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
    const table = document.createElement("table");
    table.classList.add("table");
    const thead = this.#privateCreateHeader(document.createElement("thead"));
    const tbody = this.#privateCreateBody(document.createElement("tbody"));
    table.append(thead, tbody);
    this.#privateTable = table;
  }

  #privateCreateHeader(thead) {

    const tr = document.createElement("tr");
    this.#privateHeader.forEach((text) => {
      const th = document.createElement("th");
      th.textContent = text;
      tr.append(th);
    });
    thead.append(tr);
    return thead;
  }

  #privateCreateBody(tbody) {
    this.#privateData.forEach((item) => {
      item = item.getValues();

      const tr = document.createElement("tr");

      for (let propiedad in item) {
        let td = document.createElement("td");
        td.textContent = item[propiedad];
        tr.append(td);
      }

      const tdAcciones = this.#privateAcciones(
        document.createElement("td"),
        item.id
      );

      tr.append(tdAcciones);
      tbody.append(tr);
    });

    return tbody;
  }

  #privateAcciones(td, id) {
    const div = document.createElement("div");
    div.classList.add("btn-group");

    const buttonUpdate = document.createElement("a");
    buttonUpdate.classList.add("btn", "btn-primary");
    buttonUpdate.textContent = "Update";
    buttonUpdate.href = `${Config.FrontendURL}/update.html?id=${id}`;

    const buttonDelete = document.createElement("button");
    buttonDelete.type = "button";
    buttonDelete.classList.add("btn", "btn-danger");
    buttonDelete.textContent = "Delete";

    div.append(buttonUpdate, buttonDelete);
    td.append(div);

    return td;
  }
}
