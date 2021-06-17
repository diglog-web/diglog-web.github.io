(function(){
    
    const template = document.createElement('template');
    template.innerHTML = `
        <style>
            @import "./common.css";

            :host{
                display: block;
                margin-top: -57px;
            }
            :host([hidden]) {
                display: none;
            }

            .container {
                width: 100%;
            }

            .content {
                width: var(--main-width);
                flex-wrap: wrap;
            }

            .content > div {
                flex: 1 1 255px;
                height: 407px;
                border-radius: 15px;
                background-color: #FFFFFF;
                box-shadow: 0 2px 15px 3px rgba(0,0,0,0.05);
                margin: 10px;
            }

            .icon {
                border-radius: 50%;
                background-color: #F1F1F1;
                margin-top: 40px;
            }

            .icon img {
                padding: 28px;
                width: 50px;
            }

            .title {
                margin-top: 30px;
            }

            .title h2 {
                padding: 0;
                margin: 0;
                color: #001130;
                text-align: center;
                font-size: 18px;
                font-weight: bold;
            }

            .description {
                text-align: center;
                padding: 0 20px;
                margin-top: 21px;
                color: rgba(104,104,104,0.8);
                font-size: 14px;
            }

            .read-more {
                margin: 18px 0;
            }

            .read-more button {
                box-sizing: border-box;
                padding: 16px 60px;
                border: 2px solid #F09000;
                border-radius: 30px;
                background-color: #FFFFFF;

                color: #F09000;
                font-size: 12px;
                font-weight: bold;
                letter-spacing: 0;
                line-height: 12px;
                text-align: center;

                cursor: pointer;

            }

        </style>  
        
        <div class="container flex-centered">
        
            <div class="content flex-centered">

                <div class="flex-centered-column">
                    <div class="icon">
                        <img src="./assets/Home_Icon_01.svg">
                    </div>

                    <div class="title">
                        <h2>Multi Business</h2>
                        <h2>Management</h2>
                    </div>

                    <div class="description">
                        Being present on all of your business at a time
                        is now made possible through DigLog...
                    </div>

                    <div class="read-more">
                        <button>Read More</button>
                    </div>
                </div>
                
                <div class="flex-centered-column">
                    <div class="icon">
                        <img src="./assets/Home_Icon_02.svg">
                    </div>

                    <div class="title">
                        <h2>Employee Management &</h2>
                        <h2>Attendance Monitoring</h2>
                    </div>

                    <div class="description">
                        We at DigLog firmly believes that,
                        "you build your business by building your people"...
                    </div>

                    <div class="read-more">
                        <button>Read More</button>
                    </div>                    
                </div>
                
                <div class="flex-centered-column">
                    <div class="icon">
                        <img src="./assets/Home_Icon_03.svg">
                    </div>

                    <div class="title">
                        <h2>Real-time Financial</h2>
                        <h2>Reporting</h2>
                    </div>

                    <div class="description">
                        Accurate and real-time representation of business'
                        finances such as revenues...
                    </div>

                    <div class="read-more">
                        <button>Read More</button>
                    </div>
                </div>
                
                <div class="flex-centered-column">
                    <div class="icon">
                        <img src="./assets/Home_Icon_04.svg">
                    </div>

                    <div class="title">
                        <h2>1 Way to Borrow, More</h2>
                        <h2>Ways to Pay</h2>
                    </div>

                    <div class="description">
                        This program works like "Buy Now, Pay Later" scheme which is
                        now taking the market by...
                    </div>

                    <div class="read-more">
                        <button>Read More</button>
                    </div>
                </div>
            </div><!-- content -->

        </div><!-- container -->
    `;

window.customElements.define('features-section', class extends HTMLElement {

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