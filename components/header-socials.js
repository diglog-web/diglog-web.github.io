(function(){

    const template = document.createElement('template');
    template.innerHTML = `

    <style>

        :host {
            display: block; 
        }
        .socials-container{
            background-color: #001130;
            width: 100%;
            height: 30px;
            color: #e5e7ea;
            display: flex;
            justify-content: center;
        }
        
        .socials-content{
            width: var(--main-width);
            display: flex;
            justify-content: space-between;
            height: inherit;
            align-items: center;
        }
        
        .socials-content email {
            color: white;
        }
        
        .social-networks {
            display: flex;
        }
        
        .social-networks .fa{
            color: white;
        }
        
        .social-networks a {
            width: 20px;
            height: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin: 3px;
            font-size: 9px;
        }  
        
    </style>

    <section class="socials-container">
        <div class="socials-content">
            <div class="email">
                <img src="./assets/Email.svg">
                <span>info@diglog.com</span>
            </div>
            <div class="social-networks">
                <a href="#"><img src="./assets/Social_FB.svg"></a>
                <a href="#"><img src="./assets/Social_Twitter.svg"></a>
                <a href="#"><img src="./assets/Social_Insta.svg"></a>
                <a href="#"><img src="./assets/Social_Youtube.svg"></a>
            </div>
        </div>
    </section>
    `;

    window.customElements.define('header-socials', class extends HTMLElement {

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