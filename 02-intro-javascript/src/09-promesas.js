//Promesas Promises
//El jefe nos pide algo para mañana, y nosotros prometemos que mañana lo tiene, el jefe se pone con el netflix
// y nosotros nos ponemos a trabajar, en cuanto lo terminamos le mandamos una notificación al jefe, 
// y en el caso contrario de que no pudimos terminar, pues también.
//Piensa que nosotros somos el jefe.


//Por defect se ejecuta todo lo sincrono y después se obtiene los resultados de las promesas.

// Las promesas recibe una función (callback) y recibe dos parámetros, resolve y reject, resolve es lo que se hace
// cuando se cumple la promesa y reject es cuando no se ha podido cumplir.
import { getHeroeByID } from "./08-import-export";
const promesa1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const heroe = getHeroeByID(2);
        if(heroe !== undefined) resolve(heroe);
        else reject();
    }, 2000);
});

// Las promesas tienen varias funciones, then, catch, finally. El then es el más importante ya que se ejecuta
// si la promesa ha sido ejecutado correctamente.
// Catch es cuando ha habido un error.
// Finally se ejecuta después del then o del catch, pero siempre se ejecuta al final de todo.
// then solo va a funcionar si hemos llamado el resolve() en el Promise(), 
// y catch si hacemos reject() en el constructor del Promise.

promesa1.then((heroe)=>{
    console.log('Heroe Encontrado');
    console.log(heroe);
})
.catch((err)=>{
    console.log('Heroe No Encontrado')
    console.warn(err);
});


// Podemos hacerlo todo en una función que devuelva una promesa para recibir por ejemplo parámetros adicionales:
const getHeroeByIDAsync = (id)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const heroe = getHeroeByID(id);
            if(heroe !== undefined)resolve(heroe);
            else reject('not heroe founded');
        }, 4000);
    })
}

getHeroeByIDAsync(2)
    .then((heroe)=>console.log(heroe))
    .catch(err=>console.log(err))