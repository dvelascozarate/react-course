// Forma 1
// import { heroes, owners } from './data/heroes'
import heroes, { owners } from '../data/heroes'

export const getHeroeById = (id) => heroes.find(heroe => heroe.id === id);

export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner);

// console.log(getHeroeById(2));
// console.log(getHeroeByOwner('DC'));