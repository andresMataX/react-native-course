
export const TiposBasicos = () => {

    const nombre: string[] = ['El pepe', 'Hola'];

    return (
        <>
            <h3>Tipos básicos</h3>
            {nombre.join(', ')}
        </>
    )
}
