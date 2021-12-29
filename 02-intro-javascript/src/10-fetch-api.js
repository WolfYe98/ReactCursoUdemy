//Fetch API
// Nos permite hacer peticiones HTTP a endpoints y está incluido en cualquier navegador.
const APIKEY = 'dSY8AtLQxmRGdNJOYiGZSFSwz0whPmpf';   //Dont use this API KEY, it will be erased
//Llama a giphy

const peticion = fetch('https://api.giphy.com/v1/gifs/random?api_key='+APIKEY);
// si pones el ratón encima del fetch aparece algo largo terminado con
// Promise<Response> esto quiere decir que fetch devuelve una promesa que 
// devuelve una respuesta
peticion
    .then((response)=>response.json())
    .then(({data})=>{
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);  //Coge la imagen de la url y lo mete en el body
    }) //este then viene de response.json(), que es una promesa
    .catch(console.warn);    //Esto automáticamente hace .catch((err)=>console.warn(err))

//Las promesas se pueden encadenar, response.json() devuelve 
// otra promesa, como esa promesa tiene un datos (equivale al response del primer then)
// pues lo podemos coger con el then también! porque peticion.then((response)=>response.json()) devuelve
// una promesa
