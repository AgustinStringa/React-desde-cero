"use strict"

const personajes = ['anakin', 'obi-wan', 'leia', 'padme', 'palpatine', 'mace windu', 'yoda'];

const [, pj2, , pj4, , pj6, ] = ['anakin', 'obi-wan', 'leia', 'padme', 'palpatine', 'mace windu', 'yoda'];

console.log(pj2, pj4, pj6);

personajes.map((personaje, index) => {
    console.log(`${index} - ${personaje}`);
})

const numeros = [0, 2, 4, 6, 9, 13, 56];

numeros.map((numero) => {
    const result = numero * 13;
    console.log(result);
})

console.log(numeros);