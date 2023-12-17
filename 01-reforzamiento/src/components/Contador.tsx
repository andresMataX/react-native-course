import { useState } from "react"

export const Contador = () => {

    const [counter, setCounter] = useState(0);

    const acumular = (numero: number) => {
        setCounter(counter + numero);
    }

    return (
        <>
            <h3>Contador: <small>{counter}</small> </h3>

            <button
                className="btn btn-outline-danger me-2"
                onClick={() => acumular(1)}>
                +1
            </button>
            <button
                className="btn btn-outline-danger ms-2"
                onClick={() => acumular(-1)}>
                -1
            </button>
        </>
    )
}
