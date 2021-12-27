let arr = [1,2,3,4];
//Se puede insertar cosas con el operador spread

let arr2 = arr;
arr2.push(5);

console.log(arr);
console.log(arr2);
//Vemos que los dos arrays tienen 1,2,3,4,5 porque let arr2=arr lo que hace es hacer que arr2 apunte a arr, entonces las modificaciones afectan a ambos.


//La solución a esto sería utilizar ... que crea la copia.
let arr3 = [1,2,3,4];
let arr4 = [...arr3];   //o se puede hacer arr4[...arr3,5];
arr4.push(5);
console.log(arr3);
console.log(arr4);
//Aquí vemos que arr3 tiene 1,2,3,4 y arr4 tiene 1,2,3,4,5

//Podemos usar también Array.map(function(elemento)=>{return}) esta función recorre el array o el objeto, y devuelve un array nuevo.
