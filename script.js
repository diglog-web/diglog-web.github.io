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

// email element
(function(){
    document.querySelectorAll('div.email').forEach( el => {
        let placeholder = el.querySelector('.placeholder');
        let input = el.querySelector('input');
        let asterisk = placeholder.querySelector('span');
        let isInputActive = false;
        let isEmailValid = () => (input.value.trim() !== '' && input.checkValidity()) || input.value.trim() === '';
        
        function setToInvalid() {
            setClass(el, 'email-invalid');
            removeClass(el, 'email-hover');           
        }

        input.addEventListener('change', evt => {
            if(!isEmailValid()){
                setToInvalid();
            }
        });

        input.addEventListener('mouseover', evt => {
            if(!isInputActive && isEmailValid()){
                setClass(el, 'email-hover');
            }
            
        });

        input.addEventListener('mouseout', evt => {
            removeClass(el, 'email-hover');
        });

        input.addEventListener('focus', evt => {
            isInputActive = true;
            removeClass(el, 'email-invalid');
            setClass(placeholder, 'placeholder-minimized');
            setClass(input, 'input-focus');
            removeClass(el, 'email-hover');
            setClass(el, 'email-active');
            removeClass(asterisk, 'red');
        });

        input.addEventListener('blur', evt => {
            isInputActive = false;

            if(!isEmailValid()) {
                setToInvalid();
            } else {
                setClass(el, 'email-hover');
                removeClass(el, 'email-active');
                setClass(asterisk, 'red');
            }

            if(input.value.trim() === ''){
                removeClass(placeholder, 'placeholder-minimized');
                removeClass(input, 'input-focus');
            }

        });

        //init
        if(!isEmailValid()){
            setToInvalid();
        }
        if(input.value.trim() !== ''){
            setClass(placeholder, 'placeholder-minimized');
            setClass(input, 'input-focus');
        }
    });
})();