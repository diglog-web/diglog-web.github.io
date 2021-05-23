(function(){

    const template = document.createElement('template');
    template.innerHTML = `
        <style>
             @import "./style.css";

            :host {
                display: block;
            }

            footer {
                width: 100%;
                background-color: #e1e1e1;
                display: flex;
                justify-content: center;
            }
            
            .footer-info {
                display: flex;
                width: 100%;
            }
            
            .footer-info-container {
                width: var(--main-width);
                margin-top: 133px;
            }
            
            .copyright-container{
                font-size: 14px;
                height: 60px;
                width: 100%;
                color: rgba(0,0,0,0.6);
                border-top: 1px solid rgba(0,0,0,0.2);
                display: flex;
                justify-content: center;
                align-items: center;
                margin-top: 60px;
                
            }
            
            .company-info-container {
                display: flex;
            }
            
            .footer-links-container {
                display: flex;
            }
            
            .app-links-container {
                display: flex;
            }
            
        </style>

        <footer>
            <div class="footer-info-container">
                
                <div class="footer-info">
                    <div class="company-info-container">

                    </div>
                    <div class="footer-links-container">

                    </div>
                    <div class="app-links-container">
                        
                    </div>
                </div>

                <div class="copyright-container">
                    <span>Copyright 2021 DigLog All Rights Reserved</span>
                </div>
            </div>
        </footer>

    `;

    window.customElements.define('footer-navigation', class extends HTMLElement {

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