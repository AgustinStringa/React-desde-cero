"use strict"

fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        console.log(response);
        return response.json()
    })
    .then(json => console.log(json))


/**
 * response.json() y  json en este caso son lo mismo
 * porque es lo que se retorna de una promesa a otra
 */