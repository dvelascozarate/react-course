import React from 'react';
import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import PrimeraApp from '../PrimeraApp'
import { shallow } from 'enzyme';

describe('Pruebas en el componente PrimeraApp', () => {
    // Prueba utilizando los métodos de prueba de react    
    test('Debe renderizar correctament el mensaje', () => {

        const nombre = 'Daniel'
        const { getByText } = render(<PrimeraApp nombre={nombre} />);

        expect(getByText(`Hola ${nombre}`)).toBeInTheDocument();
    })

    // Prueba utilizando Enzyme

    test('Debe de mostrar el componente correctamente', () => {

        const nombre = 'Daniel';
        const wrapper = shallow(<PrimeraApp nombre={nombre} />);

        expect(wrapper).toMatchSnapshot();

    })

    test('Debe mostrar correctamente el subtitulo', () => {
        const nombre = 'Daniel';
        const subtitulo = 'Soy un subtitulo';
        const wrapper = shallow(<PrimeraApp nombre={nombre} subtitulo={subtitulo} />);

        const texto = wrapper.find('p').text();

        expect(texto).toBe(subtitulo);

    })



})
