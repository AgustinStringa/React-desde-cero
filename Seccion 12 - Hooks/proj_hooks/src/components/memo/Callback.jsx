import React, { memo } from "react";

const Callback = memo(({ funcion }) => {
  return (
    <>
      {console.log("Callback.jsx: agregando1")}
      <span>Usando useCallback para almacenar funciones</span>
      <button onClick={funcion}>Aumentar counter</button>
    </>
  );
});

export default memo(Callback);
