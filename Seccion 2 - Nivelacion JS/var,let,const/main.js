"use strict"

let boton = document.querySelector('#boton');
let nombre = document.querySelector('#nombre');
let body = document.querySelector('body');
let btn = document.querySelector('#btn');



boton.addEventListener('click', function() {
    const data = nombre.value;
    body.append(data + ' ');
    nombre.value = '';
})

btn.addEventListener('click', function() {
    const data = nombre.value;
    body.append(data + ' ');
    nombre.value = '';
})

/**funcion segura */

const sumar = (a, b) => {
    return a + b;
}

const resultado = sumar(9, 3);
body.append(document.createElement('br'));
body.append(resultado);