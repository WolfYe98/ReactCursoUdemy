import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp =({saludo,subtitulo})=>{ // esto ya cuenta como un functional component.
    return(
        <>
            {/* <h1>Hola mundo</h1>  */}
            {/* <p>Hola soy p</p> */}
            <h1>Hola soy {saludo}</h1>
            <p>{subtitulo}</p>
        </>
    );
};
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired, //con isRequired indicamos que es obligatorio mandarle saludo.
    subtitulo: PropTypes.string
}
export default PrimeraApp;