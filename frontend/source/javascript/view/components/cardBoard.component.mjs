import { Config } from "../../config.mjs";

export class CardBoard {
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


  createCardBoardDetails(body = '') {
    const values = this.#data;
    return `
      <div class="card text-center  border-primary h-100">
        <div class="card-body">  
          <h3 class="card-title">${values.Name}</h3>
          ${body}   
          <h6 class="card-subtitle mb-2 text-muted"> CreatedAt: ${values.CreatedAt}</h6>
          <h6 class="card-subtitle mb-2 text-muted"> UpdateAt: ${values.UpdateAt}</h6>
          <div class="btn-group ">
            <button type="button" id="editButton" name=${values.Id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalUpdate"><i class="bi bi-pencil-square"></i> Edit</button>        
            <a class="btn btn-outline-primary" href="${Config.FrontendURL}/boardDetails.html?id=${values.Id}"><i class="bi bi-card-text"></i> Show</a>
            <button class="btn btn-outline-danger" type="button" id="deleteButton" name=${values.Id}><i class="bi bi-trash"></i> Delete</button>
            </div>              
          </div>
          <div class="card-footer text-muted bg-transparent border-primary">Id: ${values.Id}</div>                 
      </div>
    `;
  }

  createCardBoard(body = '') {
    const values = this.#data;
    return `
      <div class="card text-center  border-primary h-100">
        <div class="card-header border-primary">
          <h3 class="card-title">${values.Name}</h3>
        </div>
        <div class="card-body">
          ${body}            
          </div>
          <div class="card-footer text-muted bg-transparent border-primary">Id: ${values.Id}</div>                  
      </div>
    `;
  }

  set Data(data) {
    this.#data = data;
  }
}
