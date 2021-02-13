import React, { useState } from 'react'
import { container, containerTitle, inputsContainer, labels, inputs, buttonContainer, cancelButton, submitButton } from './Form.styles';

export const Form = () => {
    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
    })

    const handleInputsChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value});
    }

    return (
        <div className={container}>
            <p className={containerTitle}>Form</p>
            <div className={inputsContainer}>
                <div className={labels}>
                    <label htmlFor={'name'}>Name</label>
                    <label htmlFor={'email'}>Email</label>
                </div>
                <div className={inputs}>
                    <input id={'name'} value={inputsValues.name} onChange={handleInputsChange} />
                    <input id={'email'} value={inputsValues.email} onChange={handleInputsChange} type={'email'} />
                </div>
            </div>
            <div className={buttonContainer}>
                <button className={cancelButton}>Cancel</button>
                <button className={submitButton}>Submit</button>
            </div>
        </div>
    )
}