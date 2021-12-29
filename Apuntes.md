# Componentes
- En React, los archivos que empiezan en mayúsculas por ejemplo ```PrimeraApp.js``` suelen ser componentes.

- Los componentes suelen basarse en clases o en funciones (functional component), lo segundo es lo que se está utilizando ahora, antes se usaban class component.

- Un componente suele llamarse igual que el fichero, y luego se hace el export default, como por ejemplo:
    ```
    const PrimeraApp =()=>{
        return <h1>Hola mundo</h1>
    };
    export default PrimeraApp;

    ``` 
    Para utilizarlo se hace ```<PrimeraApp />```. El espacio se suele dejar por el estándar.

- Podemos importar los estilos simplemente con import 'rutaCss', por ejemplo ```import './index.css'```, aquí incluiríamos todo el css de index.css en la app.

- Como buena práctica, los atributos de css deben ir en orden alfabético.

- Como en JS no hace falta los ```;``` de normal no podemos hacer:
    ```
    return 
        'hello';
    ```
    Porque lo considera como ```return; hello;``` o sea, dos líneas.
    Por esto es importante usar ```;```.

- Para evitar los errores del punto anterior, en React se suele utilizar ```return()``` y dentro de los ```()``` se suele poner un componente padre con todos los componentes hijos, es decir:
    ```
    return(
        <div>
            <h1>Hola soy h1</h1>
            <p>Hola soy p</p>
        </div>
    );
    ```
    Esto funcionaría perfectamente mientras que esto de abajo no serviría:
    ```
    return(
        <h1>Hola soy h1</h1>
        <p>Hola soy p</p>
    );
    ```

- Usar ```<div></div>```para encapsular, hace que a veces el navegador tenga muchos divs que no van a usar, **por eso se debe usar** ```<Fragment></Fragment>``` **O SIMPLEMENTE** ```<></>``` en lugar de div!!!