import React, { useEffect } from "react";
import Callback from "./Callback";
import Dato from "./Dato";
import { useMemorize } from "../../hooks/useMemorize";

const Memo = () => {
  const [counter, fondo, memorizar, add, handleFondo, setFondo] = useMemorize();

  return (
    <>
      {handleFondo()}
      <h2 className="bg-warning p-3">utilizando memo y UseMemo</h2>
      <p>
        Counter: <Dato value={counter}></Dato>
      </p>

      <br />
      <Callback funcion={add}></Callback>
      <br />

      <br />

      <br />
      <button
        onClick={() => {
          handleFondo();
          setFondo(!fondo);
        }}
      >
        State independiente <br />
        (backgroundColor)
      </button>
    </>
  );
};

export default Memo;
