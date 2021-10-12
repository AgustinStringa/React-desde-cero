import { useState, useEffect } from "react";

const Effect = () => {
  const expresion = /365/gi;
  const [state, setState] = useState("");

  const evento = () => {
    alert(`felicidades, ${expresion} era la combinacion correcta`);
  };

  useEffect(() => {
    if (expresion.test(state)) {
      document.querySelector("input").style.backgroundColor = "lightgreen";
      evento();
    } else {
      document.querySelector("input").style.backgroundColor = "unset";
      window.removeEventListener("click", evento);
    }
  }, [state]);

  return (
    <>
      <h1>utilizando Use Effect</h1>
      <h5>intenta adivinar la combinacion de 3 números correcta</h5>
      <br />
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Buscar
          </label>
          <input
            value={state}
            onChange={(e) => setState(e.target.value)}
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
      </form>
    </>
  );
};

export default Effect;
