import { useEffect, useRef, useState } from 'react';
import { Usuario, ReqResListado } from '../interfaces/reqRes.interface';
import { reqResApi } from '../api/reqRes';

export const useUsuarios = () => {

    const [usuarios, setUsuarios] = useState<Usuario[]>([]);

    const paginaRef = useRef(1);

    useEffect(() => {

        // Llamado API
        cargarUsuarios();
    }, [])

    const cargarUsuarios = async () => {

        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        });

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);
        }
    }

    const paginaSiguiente = () => {
        if (paginaRef.current < 2) {
            paginaRef.current++;
            cargarUsuarios();
        } else {
            alert('No hay más registros');
        }
    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        } else {
            alert('No hay más registros');
        }
    }

    return {
        usuarios,
        paginaSiguiente,
        paginaAnterior
    }

}
