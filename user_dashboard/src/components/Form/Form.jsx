import React from 'react';
import { useForm } from '../../hooks/useForm';
import { container, inputsContainer, labels, input, buttonContainer, cancelButton, submitButton, error } from './Form.styles';

export const Form = ({ users, setUsers }) => {
    const {handleInputsChange, handleSubmit, isFormSubmitted, inputsValues, redirectToTable} = useForm(users, setUsers);

    return (
        <form className={container} onSubmit={handleSubmit}>
            <p>Form</p>
            <div className={inputsContainer}>
                <div className={labels}>
                    <label htmlFor={'name'}>Name</label>
                    <label htmlFor={'email'}>Email</label>
                </div>
                <div>
                    <input 
                        className={input(isFormSubmitted)} 
                        id={'name'} 
                        value={inputsValues.name} 
                        onChange={handleInputsChange} 
                    />
                    {isFormSubmitted && <p className={error}>Name is required</p>}
                    <input 
                        className={input(isFormSubmitted)} 
                        id={'email'} 
                        value={inputsValues.email} 
                        onChange={handleInputsChange} 
                        type={'email'} 
                    />
                    {isFormSubmitted && <p className={error}>Email is required</p>}
                </div>
            </div>
            <div className={buttonContainer}>
                <button className={cancelButton} type={'button'} onClick={redirectToTable}>Cancel</button>
                <button className={submitButton} type={'submit'}>Submit</button>
            </div>
        </form>
    )
}