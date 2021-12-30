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


### Variables
Podemos imprimir una variable en el código html de nuestro componente poniendolo entre {}, por ejemplo: 
    
```<h1>{contador}</h1>``` siendo contador una variable.

**OJO, no se puede poner así con los objetos, daría un error.**
Si queremos imprimir un objeto lo mejor es hacer 

```<pre>Json.stringify(obj)</pre>``` para que se imprima en cadena. La etiqueta ```<pre>``` es para que se ponga pequeño la letra.


### Comunicación entre componentes (props, PropTypes y DefaultProps)

- Se comunican con properties (props), un componente padre puede mandarle información al componente hijo através de properties. Estos se hacen así:
    En la definición del componente hijo tenemos que incluir el parámetro props (o el nombre que sea):

    ```
    const Componente = (props)=>{
        return(<>
            </>
        )
    }
    ```

    y en el componente padre le pasamos los datos así:

    ```
    <div>
        <Componente saludo='hola' />
    </div>
    ```

    En el caso de que queramos mandar números o cualquier cosas de JS, se debe poner dentro de ```{}```.

    así el componente hijo ```Componente``` recibe un prop.saludo con valor = 'hola'.

    A dia de hoy, **no se suele usar ```(props)``` directamente, se suele usar más la destructuración para esto**.

    ```
    const Componente = ({saludo})=>{
        return(<>
            </>
        )
    }
    ```
    en el caso de que el padre no le pase la propiedad saludo al hijo, este no tiene valor ninguno.

    Podemos también darle un valor por defecto a la propiedad, como ```({saludo='hola mundo'})``` en este caso si no se le pasa ningun valor a saludo este coge ```'hola mundo'```.

    
- **Podemos obligar a la gente meter una propiedad con PropTypes, es mejor que throw new Error por tema de memoria**
    Por ejemplo:
    ```
    import PropTypes from 'prop-types';
    const PrimeraApp =({saludo})=>{ 
        return(
            <>
                <p>{saludo}</p>
            </>
        );
    };
    PrimeraApp.propTypes = {
        saludo: PropTypes.string
    };
    export default PrimeraApp;
    ```
    con el código de arriba indicamos que saludo tiene que ser de tipo string, pero no es obligatorio que el padre lo pase, para que sea obligatorio debemos usar .isRequired así:

    ```
    PrimeraApp.propTypes = {
        saludo: PropTypes.string.isRequired
    };
    ```
    De esta forma indicamos a todos los usuarios de este componente que es necesario mandar la propiedad saludo al componente.

- Podemos asignar valor por defecto a una propiedad como anteriormente mencionado, ```({saludo,subtitulo='hola soy sub'})``` que es lo más normal, o podemos usar defaultProps de esta forma:
    ```
    PrimeraApp.defaultProps={
        subtitulo:'hola soy sub'
    };
    ```
    Los dos equivalen lo mismo.


### Eventos handler en React
Estos a diferencia de HTML5 normal, que es poner ```onClick="nombreFuncion()"```, es diferente, aquí si queremos llamar a una función que hemos hecho fuera, es necesario que en el onClick se llame como si fuese una función ejecutando la otra función, es decir:
```
const Componente = ({cosas})=>{
    const handler=(e)=>console.log(e);
    return(
        <>
        <button onClick={ (e)=>handler(e) //(se puede escribir solamente handler) }></button>
        </>
    )
};
```

**No podemos ```{handler()}```**, tenemos que hacer o ```(e)=>handler(e)``` o ```{handler}``` sin los paréntesis porque así es en react.

**El problema de poner ```{handler()}``` es que React llega esa línea y ve que hay que ejecutar la función (dentro de las ```{}``` todo es código JS) entonces lo ejecutará tal cual, y no se le asigna la función al evento onClick!!**

**```{e=>handler()}``` y ```{handler}``` hacen lo mismo! Solo que la primera forma podemos pasarle argumentos al handler!**

# Hooks
- __useState__: En React, si queremos usar una variable cuyo valor va cambiando, no podemos hacer simplemente:
    ```
    const Componenete = ()={
        let valor = 0;
        const handler = ()=>{
            valor++;
        }
        return(
            <>
            <h1>{valor}</h1>
            <button onClick={handler}>Click</button>
            </>
        );
    };
    ```

    El código de arriba parece que debería de funcionar pero no, porque esa variable se incrementará, pero el componente no se re-renderiza y se queda siempre con el valor inicial, es necesario el setValue que retorna el useState porque este cambia el valor y encima re-renderiza el componente, por lo cual en la pantalla se va actualizando también el valor. Los states son variables de la aplicación que cuando se modifican se re-renderiza el componente.

    **Todas las variables de un componente se va a reinicializar al valor de inicio cada vez que se re-renderiza algo**. O sea, cada vez que llamamos al setValor(x), como setValor re-renderiza el componente, solamente el state de Valor va a tener un valor nuevo, las demás variables reinicializan sus valores.

    La forma correcta de modificar un valor y querer que se quede modificado sería:

    ```
    const CounterApp=({value})=>{
        const [counter,setCounter] = useState(0);
        const handledAdd =(e)=>{
            setCounter(counter+1);
        }
        return(
            <>
                <h1>CounterApp</h1>
                <h2> { counter } </h2>
                <button onClick={handledAdd}>Click Me!</button>
            </>
        );
    };
    ```
    se hace counter + 1 porque counter es una constante, si hiciesemos counter++, counter++ intenta modificar el valor de la constante counter y nos daría error (counter++ es igual a counter = counter+1).

    **React nos obliga a NO cambiar los estados directamente sin utilizar setValor!!!**.
    
    Cuando clickeamos en el botón, React sólamente re-renderiza los estados que se han modificado, los que no, pasa de ellos.

    setValor su parámetro a recibir puede ser de dos formas:
        
    1. Un valor: modifica directamente el valor del state.
        
    2. Una función que tiene que tener un return newValor: newValor será el nuevo valor del state, y la función es por si hay que hacer operaciones para generar ese valor, por ejemplo: el state es un array de números y queremos incrementar un valor a todos los elementos del array.

    Hay que importarlo desde ```import React,{useState} from 'react';```.
    
    Ejemplos de state:
    ```
    const [valEstado,setValEstado] = useState('Goku');
    ```
    aquí, hay un state en la app que vale ```'Goku'```.
    
    Si hacemos:
    ```
    const [valEstado,setValEstado] = useState('Goku');
    const [valEstado2,setValEstado2] = useState('Goku2');
    ```
    Aquí habría dos states en la app.
    

# Pruebas unitarias y de integración


# Tips
- Si ponemos rafce en el archivo nos aparecerá con intellisense crear directamente el import react, el componente en forma funcional y también la exportación.    

# VS Code ShortCuts
- Puedes comentar una línea con:
    ```
    ctrl+shift+/
    ```
    o
    ```
    cmd+shift+/
    ```