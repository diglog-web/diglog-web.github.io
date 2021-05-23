'use strict';

// extensions
var setClass = (el, css) => {
    if(!el.classList.contains(css)){
        el.classList.add(css);
    }   
};

var removeClass = (el, css) => {
    if(el.classList.contains(css)){
        el.classList.remove(css);
    }   
};

const PAGE = {
     HOME : 'HOME'
    ,FEATURE: 'FEATURE'
    ,HOW_IT_WORKS: 'HOW IT WORKS'
    ,PRICING: 'PRICING'
    ,CONTACT_US: 'CONTACT_US'
};

(function(){

    if(!window.state){
        let target = {};

        window.state = (function(){

            let eventTarget = document.createTextNode(null);
            let handler = {};
            let proxy = new Proxy({}, handler);

            // Pass EventTarget interface calls to DOM EventTarget object
            
            proxy.addEventListener = function(){
                eventTarget.addEventListener.bind(eventTarget);
            };

            proxy.removeEventListener = function(){
                eventTarget.removeEventListener.bind(eventTarget);
            };

            handler.get = function(obj, prop){
                return prop in obj ? obj[prop] : null;
            };

            handler.set = function(obj, prop, val){
                obj[prop] = val;
                let evt = new CustomEvent(prop, {
                    detail:{value: obj[prop]}
                    }
                );
                eventTarget.dispatchEvent(evt);
            }

            return proxy;
        })();
    }

})();

// email element
(function(){
    document.querySelectorAll('div.email').forEach( el => {
        let placeholder = el.querySelector('.email-placeholder');
        let input = el.querySelector('input');
        let asterisk = placeholder.querySelector('span');
        let isInputActive = false;
        let isEmailValid = () => (input.value.trim() !== '' && input.checkValidity()) || input.value.trim() === '';
        
        function setToInvalid() {
            setClass(el, 'email-invalid');
            removeClass(el, 'email-hover');  
            removeClass(el, 'email-default');         
        }

        input.addEventListener('change', evt => {
            if(!isEmailValid()){
                setToInvalid();
            }
        });

        el.addEventListener('mouseover', evt => {
            if(!isInputActive && isEmailValid()){
                setClass(el, 'email-hover');
            }
            
        });

        el.addEventListener('mouseout', evt => {
            removeClass(el, 'email-hover');
        });

        input.addEventListener('focus', evt => {
            isInputActive = true;
            removeClass(el, 'email-invalid');
            setClass(placeholder, 'placeholder-minimized');
            setClass(input, 'email-input-focus');
            removeClass(el, 'email-hover');
            setClass(el, 'email-active');
            removeClass(asterisk, 'red');
        });

        input.addEventListener('blur', evt => {
            isInputActive = false;
            removeClass(el, 'email-active');

            if(!isEmailValid()) {
                setToInvalid();
            } else {
                setClass(el, 'email-hover');
                setClass(asterisk, 'red');
            }

            

            if(input.value.trim() === ''){
                removeClass(placeholder, 'placeholder-minimized');
                removeClass(input, 'email-input-focus');
            }

        });

        //init
        if(!isEmailValid()){
            setToInvalid();
        }
        if(input.value.trim() !== ''){
            setClass(placeholder, 'placeholder-minimized');
            setClass(input, 'email-input-focus');
        }
    });
})();

// subscribe element
(function(){


})();