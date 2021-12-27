const personajes = ['Goku','Vegeta','Trunks'];
//Podemos destructurar este array de esta forma:

const [goku,vegeta,trunk] = personajes;
console.log(goku);
console.log(vegeta);
console.log(trunk);

//No tienen porque llamarse igual que el valor, en este caso la destructuración se puede llamar como queramos 
//pero sí es importante el orden

const [yoquese,raro,extranio] = personajes;
console.log(yoquese);
console.log(raro);
console.log(extranio);


//Ejercicio
const ej = (valor)=>{
    return [valor,()=>{
        console.log('Hola mundo');
    }]
};
//Estamos devolviendo un array con useState

//Imprimir el primer valor del array con el nombre nombre,
//El segundo se llamará Set Nombre

const array = ej('Nombre');
const [nombre,setNombre] = array;
console.log(nombre);
setNombre();