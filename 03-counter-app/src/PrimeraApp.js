import React from 'react';
import PropTypes from 'prop-types';
const PrimeraApp =({saludo})=>{ // esto ya cuenta como un functional component.
    return(
        <>
            {/* <h1>Hola mundo</h1>  */}
            {/* <p>Hola soy p</p> */}
            <p>{saludo}</p>
        </>
    );
};
PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired //con isRequired indicamos que es obligatorio mandarle saludo.
}
export default PrimeraApp;