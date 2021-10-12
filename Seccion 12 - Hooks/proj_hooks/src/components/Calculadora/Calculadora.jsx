import React from "react";

import NumberInput from "./NumberInput";

const Calculadora = () => {
  return (
    <div>
      <h1>Aplicacion Calculadora</h1>
      <p>
        Introduce manualmente o utiliza los inputs para modificar los números y
        obtener el resultado de sus operaciones
      </p>
      <hr></hr>
      <NumberInput> </NumberInput>
    </div>
  );
};

export default Calculadora;
