

export class Modal {
    #modalType;
    #modalHeader;
    #modalBody;
    #modalFooter;
    #controller;

    constructor(type, controller) {
        this.#modalType = type;
        this.#modalHeader = this.#createHeader();
        this.#modalBody = this.#createBody();
        this.#modalFooter = this.#createFooter();
        this.#controller = controller;
    }

    get() {
        return `
            <div class="modal fade" id="modal${this.#modalType}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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

    loadEvents() {
        const form = document.querySelector(`#form${this.#modalType}`);
        form.addEventListener('submit', this.#SubmitEvent(form), false);

    }

    #SubmitEvent(form) {
        return (event) => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
                alert("Hello world!");
            } else {
                event.preventDefault()
                const input = document.querySelector(`#input${this.#modalType}BoardName`);
                const { value } = input;
                this.#typeEvent(value, form.name);
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
            form.classList.add('was-validated')
        }
    }

    #typeEvent(value, idBoard) {
        if (this.#modalType === "Create") {            
            alert(`Create-- Value: ${value} Type: ${this.#modalType} Id: ${idBoard}`);
            this.#controller.createBoard({ ["name"]: value });
        }
        if (this.#modalType === "Update") {
            this.#controller.updateBoard(idBoard,{ "name": value });                            
            alert(`Update-- Value: ${value} Type: ${this.#modalType} Id: ${idBoard}`);
        }
    }

    #createHeader() {
        return `
            <h5 class="modal-title " id="modalLabel">${this.#modalType} Board</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
    }

    #createBody() {
        let typeButton;
        if (this.#modalType == "Create") typeButton =
            `<button class="btn btn-outline-primary" type="submit" id="button-add"><i class="bi bi-plus-circle"></i> Add</button>`;
        if (this.#modalType == "Update") typeButton =
            `<button class="btn btn-outline-success" type="submit" id="button-add"><i class="bi bi-pencil-square"></i> Edit</button>`;

        return `
            <form class="row g-3 needs-validation" id="form${this.#modalType}" name="">
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="input${this.#modalType}BoardName" placeholder="Board Name" name="inputName" required>
                        <label for="input${this.#modalType}BoardName">Board Name</label>
                    </div>
                    ${typeButton}
                </div>
            </form>
        `;
    }

    #createFooter() {
        return `${Date(Date.now()).toLocaleString()}`;
    }


}