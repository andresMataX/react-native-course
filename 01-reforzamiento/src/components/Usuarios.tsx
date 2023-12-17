import { Usuario } from "../interfaces/reqRes.interface";
import { useUsuarios } from '../hooks/useUsuarios';

export const Usuarios = () => {

    const { usuarios, paginaAnterior, paginaSiguiente } = useUsuarios();

    const renderItem = ({ first_name, last_name, avatar, id, email }: Usuario) => {
        return (
            <tr key={id.toString()}>
                <td>
                    <img
                        src={avatar}
                        alt={first_name}
                        style={{
                            width: 50,
                            borderRadius: 100
                        }} />
                </td>
                <td>{first_name} {last_name}</td>
                <td>{email}</td>
            </tr>
        )
    }

    return (
        <>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(renderItem)
                    }
                </tbody>
            </table>

            <button
                className="btn btn-outline-dark me-2"
                onClick={paginaAnterior}>
                Anteriores
            </button>
            <button
                className="btn btn-outline-dark"
                onClick={paginaSiguiente}>
                Siguiente
            </button>
        </>
    )
}
