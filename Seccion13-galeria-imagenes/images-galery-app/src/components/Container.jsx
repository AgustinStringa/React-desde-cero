import React, { useState } from "react";
import Buscador from "./Buscador";
import Botones from "./Botones";

import Cards from "./Cards";

const Containers = () => {
  //estado para keyword de componente buscador
  const [input, setInput] = useState("");
  return (
    <div className="container border p-3">
      <Buscador input={input} setInput={setInput}></Buscador>
      <Botones input={input} setInput={setInput}></Botones>
      <Cards input={input} />
    </div>
  );
};

export default Containers;
