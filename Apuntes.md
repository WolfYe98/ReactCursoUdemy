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
Hay dos tipos de pruebas:
1. Pruebas unitarias: están enfocadas en pequeñas funcionalidades de la aplicación, en pequeñas piezas que hay que probar.

2. Pruebas de integración: están enfocadas en como reaccionan varias piezas en conjunto.

Imagina que tenemos una llanta del coche como la pieza que tenemos que probar, al hacer las pruebas unitarias podemos probar que la llanta sea redonda, con x dureza, segura etc, pues estas son pruebas unitarias.

Ahora las pruebas de integración básicamente es meter la llanta ya en un coche completo, y andar con el coche a ver si está funcionando como debería de funcionar.

Las pruebas deben ser:
- Fáciles de escribir
- Fáciles de leer
- Confiables
- Rápidas
- Principalmente unitarias.

**NO debemos realizar pruebas unitarias en las pruebas de integración porque se supone que esas las hemos probado ya**.

Las pruebas de integración debe probar sólamente las relaciones entre las diferentes piezas.

Es de buena práctica que en el directorio de ```tests``` se creen subdirectorios que se llamen como el directorio que queremos probar.

### AAA características que deberíamos aplicar en el diseño y desarrollo de las pruebas.
1. Arrange (Arreglar): El paso que establecemos el estado inicial, inicializamos variables, importamos las cosas necesarias y así preparamos el ambiente a probar.
2. Act (Actuar): Aquí vamos a aplicar acciones o estimulos al sujeto de pruebas (el estado anterior).
3. Assert (Afirmar): Observar el comportamiento resultante o si los resultados sean lo esperado.

Un ejemplo es:
Vamos a probar nuestra API, antes de nada tenemos que importar los paquetes de test y del propio API, e inicializar a lo mejor alguna variable que guarden los resultados esperados (Arrange), luego tenemos que definir las funciones que definirán los tests (Act) y en los tests tenemos que comprobar que el el resultado que devuelve la API sea el esperado (Assert).

### Mitos
- Las pruebas hacen que mi app no tenga errores: FALSO, somos humanos y los errores siempre estarán.
- Las pruebas no pueden fallar: FALSO, podemos hacer pruebas que arrojen falsos positivos o falsos negativos. Puede que una prueba lo hayan pasado sin embargo la aplicación siga sin funcionar.
- Hacen que la aplicación sea más lento: FALSO, las pruebas solo se ejecutan en el ámbito local de desarrollo, estás no los pasarán en producción.
- Es una pérdida de tiempo: FALSO, si hacemos pruebas bien y que sean las necesarias, no es pérdida de tiempo, de hecho mejoramos el tiempo de desarrollo.
- Hay que probar todo: mitad y mitad, porque puede tomar demasiado tiempo para programar las pruebas. Si hay deadlines deberíamos de hacer las pruebas más principales de la app.


### Patrón de diseño
Se suelen crear dentro de src una carpeta de tests. Los archivos de test tienen que ir con nombre de nombre.test.js

Normalmente se ejecutan todas las pruebas de golpe, pero eso se puede cambiar.

### Jest
React por defecto usa Jest.

Con Jest, un test puede ser:
```
test('Mensaje de lo que debe pasar',()=>{
    //Codigo para testear (assets, shouldbe...)
});
```
La función es el callback, es lo que se ejecuta para testear.

- describe(): esto es para agrupar las pruebas en forma de lista, por ejemplo si queremos probar que una función matemática con diferentes inputs, necesitamos varias pruebas, entonces agrupamos esas pruebas con:
    ```
    describe('Mensaje que se sepa que grupo debe ser',()=>{
        test('test 1',(){
            //blablabla
            expect().toBe()...
        })
    })
    ```

- Expect-toBe: esta es la primera función, expect es la funcion principal que necesitamos, y luego toBe será llamado después como por ejemplo:
    ```
    const msn = 'Hola';
    const msn2 = 'Hola';
    expect(msn).toBe(msn2);
    ```
    funciona así, expectamos que el valor de una variable (```expect(msn)```) sea igual el valor de otra variable (```.toBe(msn2)```).

    toBe no funciona con objetos, porque dos objetos aun que tengan lo mismo, apuntan a diferentes zonas de memoria, y toBe eso lo mira en los objetos, para chequear que dos OBJETOS sean iguales tenemos que usar ```toEqual(obj)```.

- toEqual: Sirve para chequear si dos __objetos__ tienen las mismas propiedades con los mismos valores (y que las propiedades se llamen igual).

- <span style="color:red">Pruebas para funciones asíncronas con done:</span> __Por defecto las pruebas son SINCRONAS__ aun que se devuelva una promesa, se ejecutan siempre síncronamente, para que las pruebas sean de forma asíncronas tenemos que pasarle un parámetro ```done``` a la función callback del test:
    ```
    test('mi test',(done)=>{
        funcionAsync().then(()=>{
            expect().toBe();
            done();
        });
    });
    ```
    Una vez que se terminen los expects es __OBLIGATORIO__ llamar al ```done()``` que es para que no se quede esperando.

- <span style="color:red">Pruebas con async/await para funciones que retornan promesas:</span> una función con async, aun que devolviesemos un dato, este devolvería una Promesa, por ejemplo:
    ```
    const getImage = async ()=>{
        try{
            const datos = await fetch('url');
            const {data} = datos.json();
            return data.url;
        }catch(error){
            return error;
        }
    }
    ```
    a simple vista parece que esta función devolvería un string que sería una url, pero __NO__ devuelve una promesa que de respuesta espera un string!!!
    Para que las prubeas funciones así, podemos hacer que la propia prueba sea async para entonces poder usar el await en lugar del then, por ejemplo:
    De normal se haría esto
    ```
    test('',(done)=>{
        getImage().then((res)=>{
            expect(res).toBe(...);
            done();
        });
    });
    ```
    con async/await sería:
    ```
    test('',async ()=>{
        const url = await getImage();
        expect(url).toBe();
    });
    ```
    si sabemos que una función devuelve una promesa, podemos optar por esta opción siempre.
    __Y CON ASYNC Y AWAIT ES SIN DONE!!!__
    ```done()``` es para las pruebas donde no usamos el async/await (DENTRO DE LA PRUEBA NO ME REFIERO EN LA FUNCIÓN)

## Pruebas sobre componentes de React

Los primeros pasos son iguales, ir a test, crear un archivo con el nombre del componenete y luego ```.test.js```.

__Debemos de alguna forma evaluar sobre el componente renderizado, para eso necesitaremos ```render``` de ```import {render} from '@testing-library/react'```__

La función render recibirá como argumento el componente a renderizar:
```
const wrapper = render(<PrimeraApp />);
```
No sé porque se le pone el nombre de wrapper pero bueno vamos a seguir las buenas prácticas

El objeto wrapper tiene muchos métodos, entonces podemos usar el método getByText(text), que devuelve el html del código que tenga el texto 'text', podemos directamente destructurar wrapper para usar getByText:
```
const {getByText} = render(<PrimeraApp saludo='Goku' />);
expect(getByText(saludo)).toBeInTheDocument();
```

```toBeInTheDocument``` no está por defecto en las pruebas, para que esta función funcione, tenemos que importar unas cosas en el test, y para evitar escribir el mismo import en todos los tests, lo suyo es hacer en el src (junto al index.js) un archivo denominado ```setupTests.js``` y dentro metemos el import, este archivo es para poner las configuraciones de tests.

El import que debemos incluir es:
```
import '@testing-library/jest-dom/extend-expect';
```

<span style="color:red;font-weight:bold;">Nosotros vamos a utilizar mejor Enzyme que es desarrollado por los propios desarrolladores de Facebook!!! Porque es mucho más sencillo.</span>

### Enzyme (Pruebas)
Es un adaptador de JS que nos ayuda a trabajar más fácilmente, se integra con Jest, Mocha, React Native etc...

Con esto comprobamos que los componentes renderizados están como queríamos.

Para instalarlo tenemos que hacer o bajar la versión de React a la 16 o sino podemos instalar esta versión: 
```npm install --save-dev @wojtekmaj/enzyme-adapter-react-17```.

Para importarlo, tenemos que importar Enzyme y el adaptador de la versión de React que estemos usando, si es la 17 usamos la de wojtekmaj y sino simplemente ponemos enzyme-adapter-react-16:
```
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
```

__Debemos importarlo siempre al ```setupTests.js```.__

Después de importarlo tenemos que configurar el adaptador como:
```
Enzyme.configure({adapter:new Adapter()})
```
justo debajo de las importaciones.

<span style="color:red;font-weight: bold;">Además de Enzyme normal</span>, como vamos a utilizar SnapShots (más adelante explico lo que es) es necesario importar también ```enzyme-to-json```, para eso hacemos:
```
npm install --save-dev enzyme-to-json
```
Y configuramos ```setupTests.js``` con:
```
import {createSerializer} from 'enzyme-to-json';
expect.addSnapshotSerializer(createSerializer({mode:'deep'}));
```
con esto configurado, ya podemos probar que el componente devuelve el snapShot correcto.

Para testear con Enzyme hacemos:
```
import { shallow } from 'enzyme';
test('',()=>{
    const wrapper = shallow(<PrimeraApp saludo='Goku'/>);
})
```
__shallow es similar al render__, pero nos da más cosas como simular clicks o tener todo el documento.

<span style="color:red;font-weight:bold;">wrapper</span> es el componenete renderizado, es decir, todo el html del componente

<span style="color:red;font-weight:bold;">¿Ahora, qué esperamos del componente?</span>

- Que se muestre de la forma correcta, para eso hacemos:
    ```
    expect(wrapper).toMatchSnapshot();
    ```
    ¿Qué es un SnapShot? El SnapShot es como la imagen del componente, para comprobar que funciona todo bien, necesitamos el paquete ```enzyme-to-json```.

    Una vez configurado el setupTests con enzyme-to-json, si nos dicen que los SnapShots no coinciden puede ser que no se haya actualizado los snapshots o que está mal el componente porque hemos cambiado algo que no deberíamos de haberlo cambiado.

    <span style="color:red;font-weight:bold;">La primera vez que se ejecuta el test con snapshot siempre dará true porque es el inicio. SnapShots son para prevenir sobre todo cambios sin querer en el html renderizado de los componentes.</span>

    **NO SE TOCA LA CARPETA __snapshots!!!**
    
    __toMatchSnapShot__ siempre compara con el snapshot anterior del componente, si el componente se ha modificado y la modificación es la versión correcta, actualizamos el snapshot con la tecla ```u``` , si por ejemplo borramos algo sin querer del componente como el SnapShot es de la versión anterior, nos indicará un error en el test, y si lo que borramos fue queriendo, con darle a la tecla ```u``` para que lo actualice ya lo arreglaríamos.

- Que los textos (valores) están dentro de la etiqueta correcta, o que exista algún texto (valor) que queremos:
    ```
    test('',()=>{
        const wrapper = shallow(<PrimeraApp saludo='goku' subtitulo='sub' />);
        const textoP = wrapper.find('p').text();
        expect(textP).toBe('sub');
    });
    ```
    El find es como un ```document.querySelector()```, que podemos encontrar elementos html con sus elementos por el id o tag o class. 

    Luego el elemento que retorna el find, tiene el método ```.text()``` que esto nos devuelve el texto que está dentro del elemento. (Es como ```document.querySelector('tag').innerText```);

    Aquí estamos cogiendo el texto de la etiqueta ```p``` (que se supone que debe imprimir lo que haya en ```subtitulo```), y lo comparamos con ```'sub'```





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