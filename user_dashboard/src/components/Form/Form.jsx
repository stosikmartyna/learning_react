import React from 'react';
import { useForm } from '../../hooks/useForm';
import { container, containerTitle, inputsContainer, labels, inputs, input, buttonContainer, cancelButton, submitButton, error } from './Form.styles';

export const Form = ({ users, setUsers }) => {
    const {handleInputsChange, handleSubmit, isFormSubmitted, inputsValues, redirectToTable} = useForm(users, setUsers);

    return (
        <div className={container}>
            <p className={containerTitle}>Form</p>
            <div className={inputsContainer}>
                <div className={labels}>
                    <label htmlFor={'name'}>Name</label>
                    <label htmlFor={'email'}>Email</label>
                </div>
                <div className={inputs}>
                    <input 
                        className={input(isFormSubmitted)} 
                        id={'name'} 
                        value={inputsValues.name} 
                        onChange={handleInputsChange} 
                    />
                    {isFormSubmitted && <span className={error}>Name is required</span>}
                    <input 
                        className={input(isFormSubmitted)} 
                        id={'email'} 
                        value={inputsValues.email} 
                        onChange={handleInputsChange} 
                        type={'email'} 
                    />
                    {isFormSubmitted &&<span className={error}>Email is required</span>}
                </div>
            </div>
            <div className={buttonContainer}>
                <button className={cancelButton} onClick={redirectToTable}>Cancel</button>
                <button className={submitButton} onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    )
}