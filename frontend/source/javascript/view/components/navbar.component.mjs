import { Config } from "../../config.mjs";

export class Navbar {

    #privateNavbar;

    constructor() {
        this.#privateGenerateNavbar();
    }

    get() {
        return this.#privateNavbar;
    }

    #privateGenerateNavbar() {
        const nav = document.createElement('nav');
        nav.classList.add('navbar', 'navbar-expand-lg', 'bg-light','navbar-dark', 'bg-dark');

        const div = document.createElement('div');
        div.classList.add('container-fluid');

        const name = document.createElement('a');
        name.classList.add('navbar-brand');
        name.href = `${Config.FrontendURL}/index.html`;
        name.textContent = 'Krello';

        div.append(name);
        nav.appendChild(div);

        this.#privateNavbar = nav;
    }
}