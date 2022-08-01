import { Config } from "../../config.mjs";

export class Table {
  #privateTable;
  #privateHeader;
  #privateData;
  #withActions;

  constructor(header) {
    this.#privateData = [];
    this.#privateHeader = header;
    this.#withActions = false;
  }

  get() {
    this.#privateGenerateTable();
    return this.#privateTable;
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

      let tr = document.createElement("tr");

      for (let propiedad in item) {
        let td = document.createElement("td");
        td.textContent = item[propiedad];
        tr.append(td);
      }

      if (this.#withActions) {
        const tdActions = this.#addActions(
          document.createElement("td"),
          item.id
        );
        tr.append(tdActions);
      }
      tbody.append(tr);
    });

    return tbody;
  }

  #addActions(td, id) {
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

  addActions() {
    this.#withActions = true;
  }

  set Data(data) {
    this.#privateData = data;
  }
}
