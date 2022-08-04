import { Config } from "../../config.mjs";

export class Card {
  #card;
  #data;
  #withActions;
  #withList;
  #withHeader;
  #controller;

  constructor(controller) {
    this.#withHeader = false;
    this.#withActions = false;
    this.#withList = false;
    this.#controller = controller;
  }

  
  create() { 
    this.#createBoardCard();
    return this.#card;
  }

  #createBoardCard() {
    const values = this.#data;
    this.#card =  `
        <div class="card text-center  border-primary h-100">
            ${this.#createHeader()}
            <div class="card-body text-dark ">
                <h3 class="card-title">${values.Name}</h3>
                <h6 class="card-subtitle mb-2 text-muted"> CreatedAt: ${values.CreatedAt}</h6>
                <h6 class="card-subtitle mb-2 text-muted"> UpdateAt: ${values.UpdateAt}</h6>
                ${this.#createActions(values.Id)}                
            </div>
            <div class="card-footer text-muted bg-transparent border-primary">Id: ${values.Id}</div>                  
        </div>`;
  }

  #createHeader(){
    let header = ``;
    if(this.#withHeader) header = `    
      <div class="card-header">
        Featured
      </div>
    `;
    return header;
  }

  #createBody(){}

  #createFooter(){}


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
