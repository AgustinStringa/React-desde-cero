"use strict"

const peticion = async() => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/users/8");
    return data;
}

const data = peticion().then((v) => console.log(v));