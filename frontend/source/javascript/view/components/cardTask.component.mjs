import { Config } from "../../config.mjs";

export class Card {
  #card;
  #data;
  #withActions;
  #withList;
  #controller;

  constructor(controller) {
    this.#withActions = false;
    this.#withList = false;
    this.#controller = controller;
  }

  
  create() {
    this.#createTaskCard();
    return this.#card;
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
    if (this.#withList) {
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
        <a class="btn btn-outline-primary" href="${Config.FrontendURL}/boardDetails.html?id=${id}"><i class="bi bi-card-text"></i> Show</a>
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
    this.#withList = true;
  }



  set Data(data) {
    this.#data = data;
  }
}
