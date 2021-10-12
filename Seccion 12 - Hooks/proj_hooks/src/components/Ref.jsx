import React from "react";
import { useRef } from "react";

const Ref = () => {
  const ref = useRef(window);

  const onButtonClick = () => {
    const largo = document.querySelectorAll("p.pe").length;
    const pee = document.querySelectorAll("p.pe");

    const random = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    pee.forEach((e) => {
      e.style.color = "unset";
    });

    const azar = pee[random(0, largo - 1)];
    azar.style.color = "lightgreen";
    ref.current = azar;
    // setState(state + 1);
  };

  return (
    <>
      <h1 className="bg-info p-3">Utilizando UseRef</h1>
      <p>Clickea en el boton para alternar el valor del hook UseRef</p>
      <textarea id="area" placeholder="escribe aqui..."></textarea>
      <br />
      <button onClick={onButtonClick}>Click aqui</button>
      <br />
      <div className="pes">
        <p id="1" className="pe">
          Primero
        </p>
        <p id="2" className="pe">
          Segundo
        </p>
        <p id="3" className="pe">
          Tercero
        </p>
        <p id="4" className="pe">
          Cuarto
        </p>
        <p id="5" className="pe">
          Quinto
        </p>
      </div>
    </>
  );
};

export default Ref;
