
import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('one punch')

    const onInputChange = ({target})=>{
        // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return;
        // setCategories(categories=>[inputValue,...categories])
        onNewCategory(inputValue.toLowerCase().trim())
        setInputValue ('')
    }

    return (

    <form onSubmit={onSubmit}>

        <input 
        
            type='text'
            placeholder='Buscar gifs'
            value={inputValue}
            onChange={onInputChange}
        
        />
    
    </form>

  )
}
