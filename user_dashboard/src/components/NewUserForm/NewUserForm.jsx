import axios from 'axios';
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { BASE_PATH } from '../helpers';
import { container, containerTitle, inputsContainer, labels, inputs, input, buttonContainer, cancelButton, submitButton, error } from './NewUserForm.styles';

export const NewUserForm = ({ users, setUsers }) => {
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
            const params = {...inputsValues, id: users.length + 1}
            // This is API call to simulate http post request to database
            const response = await axios.post(BASE_PATH, params);
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