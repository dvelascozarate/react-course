import '@testing-library/jest-dom';
import { getHeroeByIdAsync } from '../../base/09-promesas';
import heroes from '../../data/heroes';

describe('Pruebas de promesas', () => {
    test('debe retornar un heroe de forma asincrona ', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(
            heroe => {
                expect(heroe).toBe(heroes[0]);
                done();
            }
        )
    });

    test('debe manda exepción si no se encuentra un héroe', () => {
        const id = 20;

        getHeroeByIdAsync(id).catch(
            error => {
                expect(error).toBe('No se pudo encontrar el héroe');
                done();
            }
        )
    })
    

})
