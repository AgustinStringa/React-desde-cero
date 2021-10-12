import React from "react";
import { useState, useEffect } from "react";

const State = () => {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  //use effect usado de la forma correcta
  //si en este invocara a handleCLikc(que actualiza el estado) provocaria un loop eterno
  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <div>
      <h1 className="container text-center">Utilizando el hook useState</h1>
      <br />
      <button onClick={handleClick}>Aumentar</button>
      <br />
      Cuenta: {state};
    </div>
  );
};

export default State;
