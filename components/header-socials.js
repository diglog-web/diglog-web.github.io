(function(){

    const template = document.createElement('template');
    template.innerHTML = `

    <style>
        @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

        :host {
            display: block;
        }
        .socials-section{
            background-color: #001130;
            height: 30px;
            width: 100%;
            color: #e5e7ea;
            display: flex;
            justify-content: center;
        }
        
        .socials-container{
            width: var(--main-width);
            display: flex;
            justify-content: space-between;
            height: inherit;
            align-items: center;
        }
        
        .socials-container email {
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
            border: 1.5px solid #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            margin: 3px;
            font-size: 9px;
        }   
    </style>

    <section class="socials-section">
        <div class="socials-container">
            <div class="email">
                <i class="fa fa-envelope-o"></i>
                <span>info@diglog.com</span>
            </div>
            <div class="social-networks">
                <a href="#"><i class="fa fa-facebook-f"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
                <a href="#"><i class="fa fa-youtube-play"></i></a>
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