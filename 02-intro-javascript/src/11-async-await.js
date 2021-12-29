//Async Await

const getImagenPromesa = ()=>{
    return new Promise(resolve=>resolve('https://google.es'));
}
getImagenPromesa().then(res=>console.log(res));
//Aquí arriba tenemos cómo se debería de implementar una Promesa sin async
// Con async sería

const getImagenAsync=async()=>'https://google.es';
getImagenAsync().then(res=>console.log(res));
// esto y getImagenPromesa hacen LO MISMO, devuelven una promesa que devuelve la
// URL!! De hecho si pones el ratón encima de los nombres te darás cuenta
// de que devuelven los dos una promesa
// Async hace que la función retorne una promesa con el haciendo response(return por defecto)

//Vamos a crear lo del 10-fetch pero esta vez con async y await

const getGiftAsync = async()=>{
    const APIKEY = 'dSY8AtLQxmRGdNJOYiGZSFSwz0whPmpf';   //Dont use this API KEY, it will be erased
    const peticion = await fetch('https://api.giphy.com/v1/gifs/random?api_key='+APIKEY);
    // Await indica que esperamos que la promesa del fecth() termine, si no ponemos eso, se seguiría ejecutando
    // al ponerlo petición ya no es promise sino response. Aun que con el then podemos hacerlo también.
    // Esto es simplemente como hacerlo con await.
    const {data} = await peticion.json()
    const {url} = data.images.original
    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);   
}
getGiftAsync();
console.log('fuera')
// Usar await es igual que usar promise.then, todo el código secuencial
// sigue ejecutandose, solo se para a esperar la función
//Por ejemplo en el código de arriba, se ejecuta primero console.log('fuera')
// porque getGiftAsync está esperando la respuesta de la página del gift
// La función es la que se queda parado pero el hilo main sigue ejecutandose sin problemas.
//(Es decir, por usar un await en un programa no va a parar la ejecución del main)


//Cuando usamos el fetch api, necesitamos ya usar el try catch para manejar los errores.

