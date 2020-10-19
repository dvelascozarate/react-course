import { getHeroeById, getHeroeByOwner } from './bases/08-imp-exp'

const getHeroByIdAsync = (id) => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                const hero = getHeroeById(id);
                if (hero != null) {
                    resolve(hero);
                } else {
                    reject('No se encontró al heroe');
                }
            }, 2000);
        }
    );
};

getHeroByIdAsync(1).then(console.log).catch(console.log);