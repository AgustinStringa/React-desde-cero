import { useCustom } from "../hooks/useCustom";

const Custom = () => {
  const [contador, increment, decrement] = useCustom(-64, 8);

  return (
    <div>
      <p>Este es el custom hook : {contador}</p>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
    </div>
  );
};

export default Custom;
