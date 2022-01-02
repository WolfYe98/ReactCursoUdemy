import React, { useState } from 'react'

function AddCategory() {
    const [inputValue,setInputValue] = useState('');
    const handlerChange =(e)=>{
        setInputValue(e.target.value);
    };
    const handlerSubmit =(e)=>{
        e.preventDefault();
        console.log('submit hecho')
    };
    return (
        <form onSubmit={handlerSubmit}>
            <input 
                type="text"
                onChange={handlerChange}
                value={inputValue}
            />
        </form>
    );
}
export default AddCategory;