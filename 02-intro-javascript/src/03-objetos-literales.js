const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45
};
console.log(persona);

const persona2 = {...persona};
persona2.nombre = 'Peter';
console.log(persona2);