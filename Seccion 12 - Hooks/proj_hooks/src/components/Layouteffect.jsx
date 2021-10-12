import React from "react";
import { useState, useLayoutEffect, useEffect } from "react";

const Layouteffect = () => {
  //Estado 1
  const [state, setState] = useState([]);
  //data
  const newData = [{ nombre: "agustin", apellido: "stringa" }];

  //estado 2
  const [lenght, setLenght] = useState(0);

  //a los 5 seg de cargar el sitio actualiza este estado
  useEffect(() => {
    setTimeout(() => {
      setState(newData);
    }, 3000);
  }, []);

  //al cambiar el otro, este se modifica y toma como valor su "largo"
  useLayoutEffect(() => {
    const tam = state.length;
    setLenght(tam);
  }, [state]);

  return (
    <>
      <h1>Layout effect</h1>
      <hr />

      <p>Valores:</p>
      <pre>{lenght}</pre>
    </>
  );
};

export default Layouteffect;
