"use strict"

const sumar = (a, b) => {
    return new Promise((resolve, reject) => {
        if (a < 0 || b < 0) {
            reject('No sumamos numeros menores a 0');
        } else {
            resolve(a + b);
        }
    });
}

const result =
    sumar(3, 5)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.log(e);
    });

/**
 * otra promise
 */
const nombre = "agustin";
const verify = new Promise((resolve, reject) => {
    if (nombre == 'agustin') {
        resolve('hola, yo te conozco');
    } else {
        reject('no tengo idea de quien eres');
    }
})

verify.then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })