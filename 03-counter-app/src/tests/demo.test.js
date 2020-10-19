describe('Pruebas en el archivo demo.test.js', () => {
    test('should be equals', () => {

        // 1.- inicialización
        const mensaje = 'Hola mundo';

        // 2.- estímulo
        const mensaje2 = `Hola mundo`;

        // 3.- observar el comportamiento
        expect(mensaje).toBe(mensaje2);
    })
})
