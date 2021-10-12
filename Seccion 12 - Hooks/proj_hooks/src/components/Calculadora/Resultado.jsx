import React from "react";
import PropTypes from "prop-types";

const Resultado = ({ operacion, calculo, fondo, text }) => {
  return (
    <div className=" w-100">
      <p className={`${fondo} m-0 p-2 w-100 ${text}`}>
        {operacion}: {calculo}
      </p>
    </div>
  );
};

Resultado.propTypes = {
  operacion: PropTypes.string,
  calculo: PropTypes.number,
  fondo: PropTypes.string,
  text: PropTypes.string,
};

export default Resultado;
