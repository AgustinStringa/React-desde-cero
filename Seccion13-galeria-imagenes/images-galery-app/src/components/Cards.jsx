import React, { useState, useEffect, useCallback } from "react";
import Card from "./Card";

const Cards = ({ input }) => {
  // const urlimagerandom = "https://api.unsplash.com/photos/random";

  const apiKey = "q0dmuecvQTkzovHYv3I7p6f-ohyGOejR_KI7POJJL8E";
  //estado para pintar imagenes
  const [images, setImages] = useState([]);

  const peticion = useCallback(async () => {
    var urlfotos = "";

    if (input === "random") {
      urlfotos = `https://api.unsplash.com/photos/random`;
    } else {
      urlfotos = `https://api.unsplash.com/search/photos/?query=${encodeURI(
        input
      )}`;
    }

    const res = await fetch(urlfotos, {
      method: "GET",
      headers: {
        Authorization: `Client-ID ${apiKey}`,
      },
    });

    const data = await res.json();

    if (input === "random") {
      console.log(data);
      setImages([data]);
    } else {
      setImages(data.results);
    }
  }, [input]);

  useEffect(() => {
    peticion();
  }, [peticion]);

  return (
    <>
      <div className="grilla">
        {images.map((imagen) => (
          <Card
            src={imagen.urls.small}
            alt={imagen.alt_description}
            key={imagen.id}
          />
        ))}
      </div>
    </>
  );
};

export default Cards;
