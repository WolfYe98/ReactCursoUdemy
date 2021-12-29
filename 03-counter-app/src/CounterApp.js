import React from 'react';
import PropTypes from 'prop-types';
const CounterApp=({value})=>{
    const handledAdd =(e)=>{
        console.log(e)
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
            <button onClick={handledAdd}>Click Me!</button>
        </>
    );
};
CounterApp.propTypes={
    value:PropTypes.number.isRequired
};

export default CounterApp;