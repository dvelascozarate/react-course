import '@testing-library/jest-dom';

const { getSaludo } = require("../../base/02-template-string");

describe('Tests of the file 02-template-string.js', () => {
    
    test('should be Hola [nombre]!', () => {
        
        const name = 'Daniel';

        const greeting = getSaludo(name);

        expect(greeting).toBe(`Hola ${name}!`);
    })

    test('should be Hola mundo!', () => {
        const defaultGreeting = getSaludo();

        expect(defaultGreeting).toBe('Hola mundo!');
    })
    
})
