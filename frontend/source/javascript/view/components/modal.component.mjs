
import { boards as controller } from "../../controller/boards.controller.mjs";

export class Modal {
    #modalType;
    #modalHeader;
    #modalBody;
    #modalFooter;
    #controller;

    constructor(element) {
        this.#modalType = element;
        this.#modalHeader = this.#createHeader();
        this.#modalBody = this.#createBody();
        this.#modalFooter = this.#createFooter();
        //this.#controller = controller;
    }

    get() {
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

    loadEvents() {
        const forms = document.querySelectorAll('.needs-validation')
        Array.from(forms).forEach(form => {
            form.addEventListener('submit', this.#typeSubmitEvent(), false)
        })
    }

    #typeSubmitEvent() {
        return (event) => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            } else {
                event.preventDefault()
                const input = document.getElementById("inputBoardName");
                const { name, value } = input;
                console.log({ [name]: value });
                controller.createBoard({ [name]: value });
                setTimeout(() => {
                    location.reload();
                }, 1500);
            }
            form.classList.add('was-validated')
        }
    }

    #createHeader() {
        if (this.#modalType === "board") return `
            <h5 class="modal-title " id="modalLabel">Add New Board</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `;
        if (this.#modalType === "task") return `
            <h5 class="modal-title " id="modalLabel">Add New Task</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        `
        return ``;
    }

    #createBody() {
        if (this.#modalType === "board") return `
            <form class="row g-3 needs-validation" novalidate id="form">
                <div class="input-group mb-3 has-validation">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="inputBoardName" placeholder="Board Name" name="name" required>
                        <label for="inputBoardName">Board Name</label>
                    </div>
                    <button class="btn btn-outline-success" type="submit" id="button-add"><i class="bi bi-plus-circle"></i> Add</button>
                </div>
            </form>
        `;
        if (this.#modalType === "task") return `
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

    #createFooter() {
        if (this.#modalType === "board") return `${Date(Date.now()).toLocaleString()}`;
        if (this.#modalType === "task") return `
            <button id="submit-button" type="submit" class="btn btn-success"> </button>
        `;
        return ``;
    }


}