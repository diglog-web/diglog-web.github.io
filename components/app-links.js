(function(){

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            .app-links-container a:nth-child(2) {
                margin-left: 10px;
            }
        </style>

        <div class="app-links-container">
            
            <a href="javascript:void(0);">
                <img src="assets/DL_AppStore.png" 
                width="154"
                alt="Download on the AppStore">
            </a>

            <a href="javascript:void(0);">
                <img src="assets/DL_GooglePlay.png" 
                    width="173"
                    alt="Get it on Google Play">
            </a>
                            
        </div>   
    `;

    window.customElements.define('app-links', class extends HTMLElement {

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