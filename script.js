'use strict';

// extensions
var setClass = (el, css) => {
    if(el && !el.classList.contains(css)){
        el.classList.add(css);
    }   
};

var removeClass = (el, css) => {
    if(el && el.classList.contains(css)){
        el.classList.remove(css);
    }   
};

(function(){


    const eventTarget = document.createTextNode(null);

    if(!window.state){

        window.state = (function(){

            const handler = {};
            const target = {
                page: ''
                ,eventTarget: eventTarget
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
                return true;
            }


            return new Proxy(target, handler);
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