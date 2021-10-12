import { useState, useMemo, useCallback } from 'react'


export const useMemorize = () => {
    //estado contador
    const [counter, setCounter] = useState(0);
    //estado independiente
    const [fondo, setFondo] = useState(true);

    //funcion para alterar state independiente
    const handleFondo = () => {
        fondo
            ? (document.querySelector("body").style.backgroundColor = "lightgreen")
            : (document.querySelector("body").style.backgroundColor = "crimson");
    };

    //Funcion para explicar useMemo
    const procesar = (limite) => {
        for (let i = 0; i < limite; i++) {
            console.log(`numero: ${i}`);
        }
        return `finalizó el proceso luego de ${limite} veces`;
    };

    //usando useMemo
    const memorizar = useMemo(() => procesar(counter), [counter]);

    //usecallback
    const add = useCallback(() => {
        setCounter((actual_value) => actual_value + 1);
    }, [setCounter]);


    return [counter, fondo, memorizar, add, handleFondo, setFondo];
}
