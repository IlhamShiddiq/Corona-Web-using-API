class navBottom extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback(){
        this.render();
    }

    set clickEventWhat(event){
        this._clickEventWhat = event;
        this.render();
    }

    set clickEventSym(event){
        this._clickEventWhat = event;
        this.render();
    }

    set clickEventPre(event){
        this._clickEventWhat = event;
        this.render();
    }

    set clickEventStat(event){
        this._clickEventWhat = event;
        this.render();
    }

    render(){
        this.innerHTML = `
        <div class="nav-bottom-wrapper">
            <div class="nav-bottom shadow-lg">
            <div class="container">
                <div class="row">
                <a class="col-3 btn-nav ujung-kiri text-center" id="nav-what-is" href="#second">
                    <img src="image/nav-icon/what-is-icon.png" alt="What is Corona" width="75" class="icon-nav"><br>
                    <small>Apa itu Corona?</small>
                </a>
                <a class="col-3 btn-nav text-center" id="nav-sym" href="#third">
                    <img src="image/nav-icon/symptoms-icon.png" alt="What is Corona" width="75" class="icon-nav"><br>
                    <small>Gejala dari Corona</small>
                </a>
                <a class="col-3 btn-nav text-center" id="nav-prevent" href="#forth">
                    <img src="image/nav-icon/prevent-icon.png" alt="What is Corona" width="75" class="icon-nav"><br>
                    <small>Cegah dari Corona</small>
                </a>
                <a class="col-3 btn-nav ujung-kanan text-center" id="nav-statistic" href="#fifth">
                    <img src="image/nav-icon/statistic-icon.png" alt="What is Corona" width="75" class="icon-nav"><br>
                    <small>Data Statistik</small>
                </a>
                </div>
            </div>
            </div>
        </div>
        `;
    }
}

customElements.define("nav-bottom", navBottom);