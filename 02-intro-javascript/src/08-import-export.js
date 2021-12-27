//Import, export y funciones de arrays.
//para importar algo es necesario exportarlo del archivo
import {heroes} from './data/heroes';

//console.log(heroes);

const getHeroeByID=(id)=>heroes.find(elemento=>elemento.id===id); //find encuentra el primero y lo devuelve
//console.log(getHeroeByID(2))

const getHeroeByOwner=(owner)=>heroes.filter(elemento=>elemento.owner===owner); //filter coge todos los que cumpla con la condición
//console.log(getHeroeByOwner('DC'));

export{
    getHeroeByID,
    getHeroeByOwner
}