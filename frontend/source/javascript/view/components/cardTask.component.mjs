import { Config } from "../../config.mjs";

export class CardTask {
  #data;
  #controller;

  constructor(controller) {
    this.#controller = controller;
  }


  createTaskDetailsCard() {
    const values = this.#data;
    return `
    <div class="card  h-100">
        <h5 class="card-header">${values.Name}</h5>
        <div class="card-body">
            <h6 class="card-subtitle mb-2 text-muted">Board: ${values.IdBoard}, Column: ${values.IdColumn}</h6>
            <p class="card-text">Description: ${values.Description}</p>
            <div class="btn-group ">
            <button type="button" id="editButton" name=${values.Id} class="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#modalUpdate"><i class="bi bi-pencil-square"></i> Edit</button>
            <button class="btn btn-outline-danger" type="button" id="deleteButton" name=${values.Id}><i class="bi bi-trash"></i> Delete</button>
            </div>
        </div>
        <div class="card-footer ">Delivery Date: ${values.DeliveryDate}</div>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">CreatedAt: ${values.CreatedAt}</li>
        <li class="list-group-item">UpdatedAt: ${values.UpdatedAt}</li>
      </ul>        
    </div>`;
  }


  createTaskCard() {
    const values = this.#data;
    const arrowLeft = (values.IdColumn !== 1) ? this.#buttonLeft(values): ``;
    const arrowRigth = (values.IdColumn !== 3) ? this.#buttonRigth(values) : ``;
    return `
        <div class="card text-bg-dark border-primary  h-100">
            <div class="card-body">
              <h5 class="card-title">${values.Name}</h5>
                <div class="btn-group "> 
                ${arrowLeft}     
                <a class="btn btn-outline-primary" href="${Config.FrontendURL}/taskdetails.html?id=${values.Id}"><i class="bi bi-card-text"></i> Show</a>
                ${arrowRigth} 
                </div>
            </div>
            <div class="card-footer border-primary"><i class="bi bi-alarm"></i> ${values.DeliveryDate}</div>
          </ul>        
        </div>`;
  }

  #buttonLeft(values){
    return `<button type="button" id="leftButton" name=${values.Id} class="btn btn-outline-success"><i class="bi bi-arrow-left-square"></i></button>`;
  }

  #buttonRigth(values){
    return `<button type="button" id="rightButton" name=${values.Id} class="btn btn-outline-success"><i class="bi bi-arrow-right-square"></i></button>`;
  }



  set Data(data) {
    this.#data = data;
  }
}
