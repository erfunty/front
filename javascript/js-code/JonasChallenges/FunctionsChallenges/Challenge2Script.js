'use strict';

(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
document.body.addEventListener('click',function(){
    header.style.color='blue'
})
})();// it will not delete header beacause eventlistener had refrence to header at heap