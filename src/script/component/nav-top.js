class navTop extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="navbar">
            <div class="container brand">
            <a class="navbar-brand text-white" id="home" href="#">
                <img src="image/brand.jpg" width="30" height="30" alt="CoronaWeb Brand">
                <span class="ml-1">CoronaWeb</span>
            </a>
            </div>
        </nav>
        `;
    }
}

customElements.define("nav-top", navTop);