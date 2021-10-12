import { useState } from "react";

export const useCustom = (initialValue, range = 1) => {

    const [contador, setContador] = useState(initialValue);

    const increment = () => {
        setContador(contador + range);
    };

    const decrement = () => {
        setContador(contador - range);
    };

    return [contador, increment, decrement]

}
