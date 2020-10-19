import '@testing-library/jest-dom'
import { getUsuarioActivo, getUser } from '../../base/05-funciones'

describe('Pruebas del arhivo 05-funciones.js', () => {


    test('debe retornar un objeto', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(user).toEqual(userTest);
    })


    test('debe retornar un objeto con nombre definido', () => {
        const name = 'Dan';

        const userTest = {
            uid: 'ABC567',
            username: name
        };

        const user = getUsuarioActivo(name);

        expect(user).toEqual(userTest);
    })


})
