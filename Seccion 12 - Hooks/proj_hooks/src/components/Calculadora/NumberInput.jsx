import React from "react";
import { useState } from "react";
import Resultado from "./Resultado";
import { operaciones } from "../../helpers/funciones";

const NumberInput = () => {
  //estado de los numeros
  const [numeros, setNumeros] = useState({
    numero1: 0,
    numero2: 0,
  });

  //estado de los resultados
  // const [suma, setSuma] = useState(0);
  const {
    handleChange,
    sumar,
    restar,
    multiplicar,
    dividir,
    numero1,
    numero2,
  } = operaciones(numeros, setNumeros);

  return (
    <>
      <label className="m-3">
        Numero 1:{" "}
        <input
          onChange={handleChange}
          value={numero1}
          type="number"
          name="numero1"
          id=""
        />
      </label>
      <label className="m-3">
        Numero 2:{" "}
        <input
          onChange={handleChange}
          value={numero2}
          type="number"
          name="numero2"
          id=""
        />
      </label>

      <div className="border mt-4">
        <Resultado
          text="text-black"
          fondo="bg-light"
          operacion="Suma"
          calculo={sumar()}
        ></Resultado>
        <Resultado
          text="text-white"
          fondo="bg-black"
          operacion="Resta"
          calculo={restar()}
        ></Resultado>
        <Resultado
          text="text-black"
          fondo="bg-light"
          operacion="Multiplicacion"
          calculo={multiplicar()}
        ></Resultado>
        <Resultado
          text="text-white"
          fondo="bg-black"
          operacion="Division"
          calculo={dividir()}
        ></Resultado>
      </div>
    </>
  );
};

// NumberInput.propTypes = {
//     'name': PropTypes.string,
//     'valor': PropTypes.number
// }

export default NumberInput;
