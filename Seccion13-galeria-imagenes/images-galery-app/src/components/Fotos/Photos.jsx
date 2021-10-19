import React, { useState } from "react";
import Foto from "./Foto";

const Photos = () => {
  const urlFotos = "https://api.unsplash.com/photos";
  const apiKey = "q0dmuecvQTkzovHYv3I7p6f-ohyGOejR_KI7POJJL8E";
  fetch(urlFotos, {
    method: "GET",
    headers: {
      Authorization: `Client-ID ${apiKey}`,
    },
  })
    .then((data) => data.json())
    .then((fotos) => {
      //   console.log(fotos);
      var regulares = [];
      Object.values(fotos).forEach((e) => {
        regulares.push(e.urls.regular);
      });
      setLinks(regulares);
    });

  const [links, setLinks] = useState([]);
  return <div></div>;
};

export default Photos;
