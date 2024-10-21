import {leerSuperHeroe, agregarSuperHeroes} from './utils.mjs';

const archivoOriginal='./superheroes.txt';
const archivoNuevos='./agregarSuperheroes.txt';

// agregar nuevos superheroes
agregarSuperHeroes(archivoOriginal,archivoNuevos)



// leer y mostrar la lista actualizada de superheroes

const superheroes=leerSuperHeroe('./superheroes.txt');
console.log('Superhéroes ordenados:');
console.log(superheroes);