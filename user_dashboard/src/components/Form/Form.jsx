import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { container, containerTitle, inputsContainer, labels, inputs, input, buttonContainer, cancelButton, submitButton, error } from './Form.styles';

export const Form = ({ users, setUsers }) => {
    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
    })
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const history = useHistory();

    const redirectToTable = () => {
        history.push('/')
    }

    const postUserData = async() => {
        try {
            // This is API call to simulate http post request to database
            const response = await axios.post('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data', inputsValues);
            alert('Sent correctly');
            setUsers([...users, response.data]);
        } catch (err) {
            console.warn(err);
        }
    }

    const handleInputsChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value});
    }

    const handleSubmit = () => {
        const isFormValid = inputsValues.name.trim() !== ''
                && inputsValues.email.trim() !== ''

        setIsFormSubmitted(true);
        isFormValid && postUserData() && redirectToTable();
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
                    <input className={input(isFormSubmitted)} id={'name'} value={inputsValues.name} onChange={handleInputsChange} />
                    {isFormSubmitted && <span className={error}>Name is required</span>}
                    <input className={input(isFormSubmitted)} id={'email'} value={inputsValues.email} onChange={handleInputsChange} type={'email'} />
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