(function(){
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            :host{
                display: block;
            }
            :host([hidden]) {
                display: none;
            }

            .page-container{
                width: 100%;
                background-color: white;
                display: flex;
                justify-content: center;
            }

            .page-content{
                width: var(--main-width);
            }
        </style>


        <div class="page-container">
            <div class="page-content">
            
            </div>
        </div>
    `;

    window.customElements.define('home-page', class extends HTMLElement {

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