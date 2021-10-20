import React, { useState, useEffect } from "react";
import Card from "./Card";

const Cards = () => {
  // const urlimagerandom = "https://api.unsplash.com/photos/random";
  const urlfotos = "https://api.unsplash.com/photos/";
  const apiKey = "q0dmuecvQTkzovHYv3I7p6f-ohyGOejR_KI7POJJL8E";
  const [images, setImages] = useState([]);

  const peticion = async () => {
    const res = await fetch(urlfotos, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });
    const data = await res.json();

    setImages(data);
  };

  useEffect(() => {
    peticion();
  }, [images]);

  return (
    <>
      {images.map((imagen) => (
        <Card
          src={imagen.urls.small}
          alt={imagen.alt_description}
          key={imagen.id}
        />
      ))}
    </>
  );
};

export default Cards;
