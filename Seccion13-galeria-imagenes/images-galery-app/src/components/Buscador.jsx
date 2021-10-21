import React from "react";

const Buscador = ({ input, setInput }) => {
  //pasar valor del input al state
  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(document.querySelector('input[type="text"]').value);
  };

  return (
    <div className="p-3">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input-query">
          {" "}
          Buscar: <input type="text" name="input-text" id="input-query" />
        </label>
      </form>
    </div>
  );
};

export default Buscador;
