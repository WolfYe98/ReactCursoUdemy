import React,{useState} from 'react';
import PropTypes from 'prop-types';

const CounterApp=({value = 10})=>{
    const [counter,setCounter] = useState(value);

    const handledAdd =(e,val)=>{
        setCounter(counter+val);
    }
    const reset = ()=>{
        setCounter(value);
    }
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            <button onClick={e=>handledAdd(e,1)}>+1</button>
            <button onClick={reset}>Reset</button>
            <button onClick={e=>handledAdd(e,-1)}>-1</button>
        </>
    );
};
CounterApp.propTypes={
    value:PropTypes.number
};

export default CounterApp;