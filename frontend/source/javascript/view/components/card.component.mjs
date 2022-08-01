import { Config } from "../../config.mjs";

export class Card {
  #card;
  #data;
  #withActions;
  #whitList;

  constructor() {
    this.#withActions = false;
    this.#whitList = false;
  }

  create() {
    const values = this.#data;
    this.#card = `
        <div class="card">
            <h5 class="card-header">${values.Name}</h5>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Board: ${values.IdBoard}, Column: ${values.IdColumn}</h6>
                <p class="card-text">${values.Description}</p>
                ${this.createActions(values.Id)}
            </div>
            <div class="card-footer">Delivery Date: ${values.DeliveryDate}</div>
            ${this.createList(values.CreatedAt,values.UpdateAt)}       
        </div>`;
    return this.#card;
  }

  createList(createdAt,updatedAt){
    let list = ``;
    if(this.#whitList){
      list =`
      <ul class="list-group list-group-flush">
        <li class="list-group-item">CreatedAt: ${createdAt}</li>
        <li class="list-group-item">UpdatedAt: ${updatedAt}</li>
      </ul>   
      `
    }
    return list;
  }

  createActions(id){
    let actions = ``;
    if(this.#withActions){
      actions =`
      <div class="btn-group col-sm-12">
        <a class="btn btn-success" href="${Config.FrontendURL}/update.html?id=${id}">Edit</a>
        <a class="btn btn-danger" href="${Config.FrontendURL}/update.html?id=${id}">Delete</a>
      </div>
      `
    }
    return actions;
  }

  addActions() {
    this.#withActions = true;
  }

  addList() {
    this.#whitList = true;
  }

  set Data(data) {
    this.#data = data;
  }
}
