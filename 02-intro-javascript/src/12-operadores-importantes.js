//Operadores interesantes

// Tenemos la forma corta de escribir if else
const activo = true;

const mensaje = (activo) ? 'Activo':'No Activo';

//pero si queremos achicar esto porque sabemos que activo es true

const mensaje2 = activo && 'Activo';
console.log(mensaje2)
// El operador && solo devuelve activo si y solamente si la condicion es true, 
// o sea si ponemos !activo && 'Activo' devuelve un false directamente.
