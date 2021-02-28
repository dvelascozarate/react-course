import '@testing-library/jest-dom';
import { getImagen } from "../../base/11-async-await";

describe('Valida mediante metodos asincronos', () => {

    test('Debe retornar una url de un gif', async () => {

        const url = await getImagen();

        expect(url.includes('https://')).toBe(true);

    })

})
