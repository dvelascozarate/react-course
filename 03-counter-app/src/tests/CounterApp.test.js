import React from 'react'
import "@testing-library/jest-dom"
import { shallow } from 'enzyme';
import CounterApp from '../CounterApp';

describe('Pruebas del componente CounterApp', () => {

    const defaultValue = 100;
    let wrapper = shallow(<CounterApp value={defaultValue} />);

    beforeEach(() => {
        wrapper = shallow(<CounterApp value={defaultValue} />);
    });

    test('Comprueba que el componente se muestra correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })

    test('Comprueba que el valor por defecto se muestra correctamente', () => {
        const defaultValueText = wrapper.find('h2').text();
        expect(defaultValueText).toBe(defaultValue.toString());
    })

    test('Comprueba que el boton +1 fuciona correctamente', () => {
        wrapper.find('button').at(0).simulate('click');
        const defaultValueText = wrapper.find('h2').text();
        expect(defaultValueText).toBe('101');
    })

    test('Comprueba que el boton -1 fuciona correctamente', () => {
        wrapper.find('button').at(2).simulate('click');
        const defaultValueText = wrapper.find('h2').text();
        expect(defaultValueText).toBe('99');
    })

    test('Comprueba que el boton Reset fuciona correctamente', () => {
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const defaultValueText = wrapper.find('h2').text();
        expect(defaultValueText).toBe(defaultValue.toString());
    })

})
