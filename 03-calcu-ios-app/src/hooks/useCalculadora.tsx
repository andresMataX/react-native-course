import { useState, useRef } from 'react';

enum Operadores {
    sumar, restar, multiplicar, dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const limpiar = () => {
        setNumero('0');
        setNumeroAnterior('0');
    }

    const armarNumero = (numeroTexto: string) => {

        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);

                // Evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);

                // Evaluar si es diferente a 0 y no hay punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);

                // Evitar 0000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);

            } else {
                setNumero(numero + numeroTexto);
            }

        } else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {

        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        } else {
            setNumero('-' + numero);
        }
    }

    const btnDelete = () => {

        let negativo = '';
        let numeroTemp = numero;

        if (numero.includes('-')) {
            negativo = '-';
            numeroTemp = numero.substring(1);
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1));
        } else {
            setNumero('0');
        }

        /** Evaluamos si solamente tenemos el 0 o -0
        // if (numero === '0' || numero === '-0') return;

        // Evaluamos que tengamos más de un dígito
        // if (numero.length === 1) {
        //     setNumero('0');
        // } else {
        //     setNumero(numero.substring(0, numero.length - 1));
        // }  */
    }

    const cambiarNumeroPorAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1));
        } else {
            setNumeroAnterior(numero);
        }
        setNumero('0');
    }

    const btnDividir = () => {

        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.dividir;
    }

    const btnMultiplicar = () => {

        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.multiplicar;
    }

    const btnRestar = () => {

        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.restar;
    }

    const btnSumar = () => {

        cambiarNumeroPorAnterior();
        ultimaOperacion.current = Operadores.sumar;
    }

    const calcular = () => {

        const num1 = Number(numero);
        const num2 = Number(numeroAnterior);

        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumero(`${num1 + num2}`);
                break;
            case Operadores.restar:
                setNumero(`${num2 - num1}`);
                break;
            case Operadores.multiplicar:
                setNumero(`${num1 * num2}`);
                break;
            case Operadores.dividir:
                setNumero(`${num2 / num1}`);
                break;
        }
        setNumeroAnterior('0');
    }

    return {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        btnDelete,
        btnDividir,
        btnMultiplicar,
        btnSumar,
        btnRestar,
        armarNumero,
        calcular
    }
}