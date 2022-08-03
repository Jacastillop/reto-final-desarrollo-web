
export class Modal{
    #modalHeader;
    #modalBody;
    #modalFooter;

    constructor(element){
        this.#modalHeader =this.#createHeader(element);
        this.#modalBody = this.#createBody(element);
        this.#modalFooter = this.#createFooter(element);
    }

    get(){
        return `
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header ">
                            ${this.#modalHeader}
                        </div>
                        <div class="modal-body">
                            ${this.#modalBody}
                        </div>
                        <div class="modal-footer">
                            ${this.#modalFooter}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    #validateForms() {
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
              event.preventDefault()
              event.stopPropagation()
            } else {
            event.preventDefault()
            debugger
            const formData = new FormData(form)
            console.log(formData.get('inputBoardName'))
          }      
          form.classList.add('was-validated')
            //boards.createBoard(formData);
          }, false)
        })
      }

    #createHeader(element){
        if(element === "board") return `
            <h5 class="modal-title " id="modalLabel">Add New Board</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        if (element === "task") return `
            <h5 class="modal-title " id="modalLabel">Add New Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `
        return ``;
    }

    #createBody(element){
        if(element === "board") return `
            <form class="row g-3 needs-validation" novalidate>
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="inputBoardName" placeholder="Board Name" required>
                        <label for="floatingInputGroup1">Board Name</label>
                    </div>
                    <button class="btn btn-outline-success" type="submit" id="button-add"><i class="bi bi-plus-circle"></i> Add</button>
                </div>
            </form>
        `;
        if (element === "task") return `
            <form class="row g-3 needs-validation" novalidate>
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="inputBoardName" placeholder="Title Board" required>
                        <label for="floatingInputGroup1">Title Board</label>
                    </div>
                    <button class="btn btn-outline-success" type="submit" id="button-add"><i class="bi bi-plus-circle"></i> Add</button>
                </div>
            </form>
        `;
        return ``;
    }

    #createFooter(element){
        if(element === "board") return `${Date(Date.now()).toLocaleString()}`;
        if (element === "task") return `
            <button id="submit-button" type="submit" class="btn btn-success"> </button>
        `;
        return ``;
    }


}