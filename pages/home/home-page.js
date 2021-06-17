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

            .container{
                width: 100%;
                /*background-color: white;*/
                display: flex;
                justify-content: center;
            }

            .content{
                /*width: var(--main-width);*/
                width: 100%;
            }


        </style>


        <div class="container">
            <div class="content">

                <billboard-section></billboard-section>
                <features-section></features-section>
                <cards-section></cards-section>
                <subscription-section></subscription-section>
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