import { Config } from "../../config.mjs";

export class Card {

  #card;
  #data;

  constructor(){ 
  }

  create() {
    const values = this.#data;
    this.#card = `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${values.Name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Board: ${values.IdBoard}, Column: ${values.IdColumn}</h6>
                <p class="card-text">${values.Description}</p>
                <a href="#" class="btn btn-primary">edit</a>
            </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Delivery Date: ${values.DeliveryDate}</li>
                <li class="list-group-item">CreatedAt: ${values.CreatedAt}</li>
                <li class="list-group-item">UpdatedAt: ${values.UpdateAt}</li>
            </ul>        
        </div>`;
    return this.#card;
  }

  set Data(data){
    this.#data = data;
  }
}
