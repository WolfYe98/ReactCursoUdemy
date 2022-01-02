import React,{useState} from 'react'
import AddCategory from './components/AddCategory';

export default function GifExpertApp() {
    const [categories,setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
    const handlerAdd =()=>{
        setCategories([...categories,'Hunter X Hunter']);
    }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory />
            <hr/>
            <ol>
                {
                    categories.map((elemento)=>{
                        return(<li key={elemento}>{elemento}</li>);
                    })
                }
            </ol>
            <button onClick={handlerAdd}> Add </button>
        </>
    );
}
