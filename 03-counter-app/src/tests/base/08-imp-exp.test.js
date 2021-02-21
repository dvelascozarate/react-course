import '@testing-library/jest-dom';
import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Test for the file 08-imp-exp.js', () => {
    test('should return a hero by id', () => {

        const id = 1;

        const heroe = getHeroeById(id);
        const heroe2 = heroes.find( (heroe) => heroe.id === id );

        expect(heroe).toEqual(heroe2);
    });
    
    test('should be undefined', () => {

        const id = 10;

        const heroe = getHeroeById(id);

        expect(heroe).toBe(undefined);
    });

    test('should be an array of the DC heroes', () => {

        const owner = 'DC';

        const DCHeroes = getHeroesByOwner(owner);

        const DCHeroes2 = heroes.filter( (heroe) => heroe.owner === owner )

        expect(DCHeroes).toEqual(DCHeroes2);
    });

    test('should be an array of Marvel heroes with a length of 2', () => {

        const owner = 'Marvel';

        const DCHeroes = getHeroesByOwner(owner);

        expect(DCHeroes.length).toBe(2);
    });
})
