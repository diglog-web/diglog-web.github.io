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

            .footer-info-content {
                width: var(--main-width);
                margin-top: 133px;
            }    

            .footer-info {
                display: flex;
                width: 100%;
                flex-wrap: wrap;
            }

            .footer-info > div {
                flex: 1 1 150px;
            }

            .footer-info > div:nth-child(2) {
                margin: 30px;
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
            
            .company-info-container{
                /* overide flex-centered-column */
                align-items: flex-start;
            }

            .company-info-container div:nth-child(2) {
                margin-top: 20px;
                color: rgba(0,0,0,0.5);
                font-size: 13px;
            }
            
            .footer-links-container > div {
                flex-basis: 50%;
            }

            .footer-links-container h1{
                font-family: Raleway;
                font-size: 13px;
                color: #001130;
            }

            .footer-links-container ul{
                font-size: 13px;
                color: rgba(0,0,0,0.6);
                list-style-type: none;
                margin-top: 10px;
            }

            .footer-links-container ul li{
                margin-top: 10px;
            }

            .app-links-container img:nth-child(2) {
                margin-left: 20px;
            }
            
        </style>

        <footer>
            <div class="footer-info-content">
                
                <div class="footer-info flex-centered">

                    <div class="company-info-container flex-centered-column">

                        <div>
                            <img src="assets/desktop/DigLog Logo - WhiteBG.png" 
                                alt="DigLog"
                                width="158">
                        </div>
                        
                        <div>
                            DigLog is a digitized business management solution platform 
                            that streamlines day-to-day business operations.
                        </div>

                    </div>

                    <div class="footer-links-container flex-centered">
                        <div>
                            <h1>Product</h1>
                            <ul>
                                <li>Features</li>
                                <li>Pricing</li>
                                <li>How It Works</li>
                            </ul>                       
                        </div>

                        <div>
                            <h1>Company</h1>
                            <ul>
                                <li>About Us</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>                       
                        </div>

                    </div>

                    <div class="app-links-container flex-centered">
                    
                        <img src="assets/desktop/DL_AppStore.png" 
                            width="154"
                            alt="Download on the AppStore">

                        <img src="assets/desktop/DL_GooglePlay.png" 
                            width="173"
                            alt="Get it on Google Play">
                                        
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