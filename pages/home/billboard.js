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

            .billboard {
                height:605px;
                width: 100%;
                background-image: url("./assets/Banner_v1.jpeg");
                background-repeat: no-repeat;
                background-position: center; 
                background-size: 1440px;

                display: flex;
                justify-content: center;
            }

            .info-container {
                width: var(--main-width);

                display: flex;
            }

            .info-container div {
                flex-basis: 50%;
            }

            .info-content {
                margin-top: 50px;
            }

            .info-content h2 {
                font-family: Roboto;
                font-size: 15px;
                color: #F09000;
                padding: 0;
                margin: 0;
            }

            .info-content h1 {
                font-family: Raleway;
                font-size: 53px;
                font-weight: 800;
                padding: 0;
                margin: 0;
            }

            .info-content ul {
                padding: 0;
                margin-top: 20px;
            }

            .info-content li {
                color: #686868;
                font-family: Roboto;
                font-size: 14.5px;
                font-weight: 500;
                list-style-type: none;
                line-height: 27px;
            }

            .info-content li:before {
                display: inline-block;
                content: '';
                background-image: url('./assets/check-circle.svg');
                background-size: 15px 15px;
                height: 15px;
                width: 15px;
                position: relative;
                top: 2px;
                margin-right: 5px;
            }

            app-links {
                display: block;
                margin-top: 40px;
            }

            .circle {
                box-sizing: border-box;
                border: 2px solid #F09000;
                background-color: #FFFFFF;
                box-shadow: 0 2px 20px 4px rgba(0,0,0,0.55);
                border-radius: 50%;
                width: 90px;
                height: 90px;

                display: flex;
                justify-content: center;
                align-items: center;
                padding-left: 5px;

                margin: 410px 0 0 240px;
                cursor: pointer;
            }


        </style>


        <div class="container">
            <div class="content">

                <div class="billboard">
                    <div class="info-container">
                        <div class="info-content">
                            <h2>Tailor-made for MSME Needs all in One App</h2>
                            <h1>Grow through Us.</h1>
                            <h1>Grow with Us.</h1>
                            <ul>
                                <li>Multi business management capability</li>
                                <li>Stress-free Manpower Management & Attendance Tracking</li>
                                <li>Real-time and reliable Financial reports</li>
                                <li>"1 way to borrow, more ways to pay" cooperative program</li>
                                <li>Regular loan payment due reminders for FREE</li>
                            </ul>
                            <app-links></app-links>
                        </div>

                        <div class="play">
                            <a class="circle">
                                <img src="./assets/PlayButton.svg" alt="Play">
                            </a>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    `;

window.customElements.define('billboard-section', class extends HTMLElement {

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