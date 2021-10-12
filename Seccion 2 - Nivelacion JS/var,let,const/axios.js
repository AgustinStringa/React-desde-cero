"use strict"
/**
 * usando axios, librería para fetch
 */

axios.get("https://jsonplaceholder.typicode.com/users/3")
    .then(({ data }) => console.log(data))