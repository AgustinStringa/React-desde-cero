"use strict"
const numero = function() {
    return parseInt(Math.random() * 1000);
}

var wrap = document.querySelector('#wrap');
const ul = document.createElement('ul');
wrap.append(ul);

setInterval(function() {
    const li = document.createElement('li');
    li.textContent = numero();
    ul.append(li);
}, 1000)