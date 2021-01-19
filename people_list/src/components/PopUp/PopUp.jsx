import React, { useState } from 'react';
import { popupContainer, popupForm, popupAddButton, popupCloseButton, popupHeader, popupInput } from './PopUp.styles';

export const PopUp = ({type, onSubmit, closePopUp}) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputValue.trim());
    }

    const placeholder = type.charAt(0).toUpperCase() + type.slice(1);

    const isCategory = type === 'category';

    return (
        <div className={popupContainer}>
            <form className={popupForm} onSubmit={handleSubmit}>
                <span className={popupHeader}>Add new {type}</span>
                <input 
                    className={popupInput(isCategory)} 
                    value={inputValue} 
                    placeholder={placeholder} 
                    onChange={handleInputChange} 
                    autoFocus 
                /> 
                <div>
                    <button className={popupAddButton} type={'submit'}>Add</button>    
                    <button className={popupCloseButton} onClick={closePopUp}>Close</button>
                </div>
            </form>
        </div>      
    )
}