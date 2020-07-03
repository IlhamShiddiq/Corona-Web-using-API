class StatBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="page page-5">
            <div class="sub-page sub-page-5">
                <div class="container">
                    <div class="row row-case">
                        <div class="col-lg-4">
                            <div class="card text-white bg-danger mb-3" style="width: 100%;" data-aos="flip-left">
                                <div class="card-header">Kasus Positif</div>
                                <div class="card-body card-body-case">
                                    <div class="total total-positif text-center" id="pos-case">
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card text-white bg-success mb-3" style="width: 100%;" data-aos="flip-left">
                                <div class="card-header">Kasus Sembuh</div>
                                <div class="card-body card-body-case">
                                    <div class="total total-sembuh text-center" id="rec-case">
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="card text-white bg-secondary mb-3" style="width: 100%;" data-aos="flip-left">
                                <div class="card-header">Kasus Meninl</div>
                                <div class="card-body card-body-case">
                                    <div class="total total-meninggal text-center" id="dea-case">
                    
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}

customElements.define("stat-box", StatBox);