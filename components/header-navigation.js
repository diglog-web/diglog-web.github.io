(function(){

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
             @import "./style.css";

            :host {
                display: block;
                --logo-container-width: 166px;
                --request-demo-width: 155px;
                --nav-width: calc(100% - var(--logo-container-width) - var(--request-demo-width));
                --header-height: 84px;
            }

            header {
                height: var(--header-height);
                box-shadow: 0 3px 7px 0 rgba(0,0,0,0.15);    
                display: flex;
                justify-content: center;            
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
            }

            ul {
                display: flex;
                justify-content: space-around;
                list-style-type: none;
                flex-direction: row;
                font-family: "Roboto Bold";
                font-size: 13px;
            }

            ul li {
                display: flex;
                height: var(--header-height);
                align-items: center;
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
                font-size: 14px;
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
                <div class="logo-container"></div>
                <nav>
                    <ul>
                        <li class="active"><a href="#">Home</a></li>
                        <li><a href="#">Feature</a></li>
                        <li><a href="#">How It Works</a></li>
                        <li><a href="#">Pricing</a></li>
                        <li><a href="#">Contact Us</a></li>
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

        }

        disconnectedCallback() {

        }

    });    

})();