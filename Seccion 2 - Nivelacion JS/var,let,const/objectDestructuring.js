"use strict"

var anakin = {
    nombre: 'anakin',
    apellido: 'skywalker',
    especie: 'humano',
    hijos: {
        hijo: 'Luke',
        hija: 'Leia'
    },
    pareja: 'Padme Amidala',
    madre: 'Shmi Skywalker',
    rango: 'Caballero Jedi',
    asosiacion: 'republica galáctica'
};



for (const prop in anakin) {
    // console.log(`${prop}: ${anakin[prop]}`);
}