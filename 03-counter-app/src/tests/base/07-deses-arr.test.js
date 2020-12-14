import '@testing-library/jest-dom';
import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas del archivo 7', () => {
    test('Debe recibir un arreglo con texto y numeros ', () => {
        
        const [text, number] = retornaArreglo();

        expect(typeof text).toBe('string');
        expect(typeof number).toBe('number');

        expect(text).toBe('ABC');
        expect(number).toBe(123);

    })
    
})
