"use strict"

const peticion = async() => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/8"); //fetch retorna promesa
    const data = await response.json();
    return data;
};

const data = peticion().then(console.log);