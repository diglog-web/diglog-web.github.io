(function(){

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
             @import "./style.css";

            :host {
                display: block;
                --logo-container-width: 166px;
                --request-demo-width: 200px;
                --nav-width: calc(100% - var(--logo-container-width) - var(--request-demo-width));
                --header-height: 84px;
            }

            header {
                display: flex;
                justify-content: center;   
                box-shadow: 0 3px 7px 0 rgba(0,0,0,0.15);         
            }

            .header-content{
                display: flex;
                width: var(--main-width);
                justify-content: space-between;
                align-items: center;
                background-color: #FFFFFF;
            }

            nav{
                width: var(--nav-width);
                height: 100%;
                margin: 0 10%;
            }

            ul {
                display: flex;
                justify-content: space-around;
                list-style-type: none;
                flex-direction: row;
                font-family: "Roboto";
                font-weight: bold;
                font-size: 13px;
                min-width: 300px;
            }

            ul li {
                display: flex;
                height: var(--header-height);
                align-items: center;
                border-bottom: 5px solid #FFFFFF;
            }
            
            
            ul a{
                text-decoration: none;
                color: #686868;
            }

            .active {
                border-bottom: 5px solid #F09000;
            }

            .request-demo-container {
                height: 46px;
                width: var(--request-demo-width);
                border-radius: 30px;
                background-color: #F09000;
                box-shadow: 1px 2px 7px 0 rgba(0,0,0,0.15);
                
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            button {
                color: #FFFFFF;
                font-family: Roboto;
                font-size: 13px;
                font-weight: bold;

                width: var(--request-demo-width);
                height: 46px;

                border-radius: 27.5px;
                background-color: #F09000;
                box-shadow: 1px 2px 7px 0 rgba(0,0,0,0.15);
                border: none;
            
            }

            button:hover {
                background-color: #C87800;
                box-shadow: none;
                cursor: pointer;
            }

            .logo-container {
                width: var(--logo-container-width);

            }


        </style>

        <header>
            <div class="header-content">
                <div class="logo-container">
                    <img src="assets/DigLog Logo - WhiteBG.png" 
                        alt="DigLog"
                        width="167">
                </div>
                <nav>
                    <ul>
                        <li class="active"><a href="javascript:void(0)">Home</a></li>
                        <li><a href="javascript:void(0);">Feature</a></li>
                        <li><a href="javascript:void(0);">How It Works</a></li>
                        <li><a href="javascript:void(0);">Pricing</a></li>
                        <li><a href="javascript:void(0);">Contact Us</a></li>
                    </ul>
                </nav>

                <button>Request a Demo</button>
            </div>
        </header>

    `;

    window.customElements.define('header-navigation', class extends HTMLElement {

        constructor() {
            super();
            this.attachShadow({mode: 'open'});
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }

        connectedCallback() {

            this.addEventListeners();
        }

        disconnectedCallback() {

        }

        addEventListeners(){
            const links = this.shadowRoot.querySelectorAll('li a');
            for(const li of links){
                li.addEventListener('click', evt => {
                    window.state.page = evt.target.innerText;
                });
            }

            window.state.eventTarget.addEventListener('page', function(evt){
                removeClass(this.shadowRoot.querySelector('.active'), 'active');
                
                const el = Array.from(this.shadowRoot.querySelectorAll('li'))
                    .find(el => el.children[0].innerText === evt.detail.value);

                setClass(el, 'active');
            }.bind(this));
        }

    });    

})();