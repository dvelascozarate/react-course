import React from 'react';
import { render } from "@testing-library/react"
import PrimeraApp from '../PrimeraApp'

describe('Pruebas en el componente PrimeraApp', () => {
    test('Debe renderizar correctament el mensaje', () => {

        const nombre = 'Daniel'
        const { getByText } = render(<PrimeraApp nombre={nombre} />);

        expect(getByText(`Hola ${nombre}`)).toBeInTheDocument();
    })

})
