//Desestructuración

//Extrae las propiedades de un objeto, así no tenemos que usar siempre obj.propiedad

const persona = {
    nombre:'Bate',
    apellido:'Ye',
    edad:23
};

console.log(persona.nombre)
console.log(persona.apellido)
console.log(persona.edad)


const {nombre,apellido,edad} = persona; //Esto extrae las propiedades de persona, 
console.log(nombre)                     //tienen que tener los mismos nombres que las propiedades, sino no funcionaría
console.log(apellido)                   //Es decir, const {n,a,e} = persona, no funciona porque persona no tiene ningun atributo n,a,e
console.log(edad)


//podemos incluso usarlo para funciones, por ejemplo
const retPersona = ({nombre,edad})=>({
    name:nombre,
    age:edad
});

console.log(retPersona(persona));

//Incuso ahora podemos hacer:
const {name,age} = retPersona(persona);
console.log(age);

//incluso podemos extraer objetos anidados
const geografia = {
    lugar: 'madrid',
    latLeng:{
        lat:1,
        leng:2
    }
};

const{lugar,latLeng:{lat,leng}} = geografia;
console.log(lugar);
console.log(lat);
console.log(leng);
//latLeng NO existe en este contexto porque se han extraido sus propiedades.
