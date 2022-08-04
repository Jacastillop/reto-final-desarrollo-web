import { Config } from "../../config.mjs";

export class Card {
  #card;
  #data;
  #withActions;
  #whitList;
  #controller;

  constructor(controller) {
    this.#withActions = false;
    this.#whitList = false;
    this.#controller = controller;
  }

  
  create(isBoard = false) {
    if (isBoard) this.#createBoardCard();
    else this.#createTaskCard();
    return this.#card;
  }

  #createBoardCard() {
    const values = this.#data;
    this.#card =  `
        <div class="card text-center  border-primary h-100">
            <div class="card-body text-dark ">
                <h3 class="card-title">${values.Name}</h3>
                <h6 class="card-subtitle mb-2 text-muted"> CreatedAt: ${values.CreatedAt}</h6>
                <h6 class="card-subtitle mb-2 text-muted"> UpdateAt: ${values.UpdateAt}</h6>
                ${this.#createActions(values.Id)}                
            </div>
            <div class="card-footer text-muted bg-transparent border-primary">Id: ${values.Id}</div>                  
        </div>`;
  }

  #createTaskCard() {
    const values = this.#data;
    this.#card =  `
        <div class="card h-100">
            <h5 class="card-header">${values.Name}</h5>
            <div class="card-body">
                <h6 class="card-subtitle mb-2 text-muted">Board: ${values.IdBoard}, Column: ${values.IdColumn}</h6>
                <p class="card-text">${values.Description}</p>
                ${this.#createActions(values.Id)}
            </div>
            <div class="card-footer ">Delivery Date: ${values.DeliveryDate}</div>
            ${this.#createList(values.CreatedAt, values.UpdateAt)}       
        </div>`;
  }

  #createList(createdAt, updatedAt) {
    let list = ``;
    if (this.#whitList) {
      list = `
      <ul class="list-group list-group-flush">
        <li class="list-group-item">CreatedAt: ${createdAt}</li>
        <li class="list-group-item">UpdatedAt: ${updatedAt}</li>
      </ul>   
      `;
    }
    return list;
  }

  #createActions(id) {
    let actions = ``;

    if (this.#withActions) {
      actions = `
      <div class="btn-group ">
        <button type="button" id="editButton" name=${id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalUpdate"><i class="bi bi-pencil-square"></i> Edit</button>        
        <a class="btn btn-outline-primary" href="${Config.FrontendURL}/update.html?id=${id}"><i class="bi bi-card-text"></i> Show</a>
        <button class="btn btn-outline-danger" type="button" id="deleteButton" name=${id}><i class="bi bi-trash"></i> Delete</button>
      </div>
      `;
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
