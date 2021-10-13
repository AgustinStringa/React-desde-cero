import React, { memo } from "react";
import Dato from "./Dato";

const Callback = memo(({ funcion }) => {
  console.log("Callback.jsx: agregando1");
  return (
    <>
      {console.log("Callback.jsx: agregando1")}
      <span>Usando useCallback para almacenar funciones</span>
      <button onClick={funcion}>Aumentar counter</button>
    </>
  );
});

export default memo(Callback);
