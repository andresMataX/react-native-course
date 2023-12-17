import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {

    const { counter, acumular } = useCounter(10);

    return (
        <>
            <h3>Contador con Hook: <small>{counter}</small> </h3>

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
