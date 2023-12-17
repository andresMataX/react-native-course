import { useState } from "react";

export const useCounter = (inicial: number = 10) => {

    const [counter, setCounter] = useState(inicial);

    const acumular = (numero: number) => {
        setCounter(counter + numero);
    }

    return {
        counter,
        acumular
    }

}
