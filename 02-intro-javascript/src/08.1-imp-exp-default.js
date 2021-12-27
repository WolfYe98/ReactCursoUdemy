//Para exportar algo, se puede exportar por defecto, esto hace que cuando hacemos el import 
//del módulo, si no especificamos nada importa el default.
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    }
]

// import heroes from './data/heroes' or import cualquierNombre from './data/heroes' así lo importa

export const owner = ["DC","Marvel"];

//Para coger este se necesita {} como import {owner} from ''

//Se puede exportar todo en una sola export, como por ejemplo:
export {
    heroes,  //indicando que por defect se exporta heroes se haría con heroes as default
    owner
}

//Para importarlos todos lo hacemos con destructuracion import {heroes,owner} from './data/heroes.js'