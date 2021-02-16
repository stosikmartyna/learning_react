import React, { useState } from 'react';

export const Form = () => { 
    const [inputsValues, setInputsValues] = useState({
        username: '',
        password: '',
    });
    const [usersData, setUsersData] = useState([]);
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);

    const handleInputsChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const clearForm = () => {
        setInputsValues({
            username: '',
            password: ''
        });
        setIsFormSubmitted(false);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = inputsValues.username.trim() !== '' 
            && inputsValues.password.trim() !== ''

        const submitForm = () => {
            setUsersData([...usersData, inputsValues])
            return true
        }

        setIsFormSubmitted(true);
        isValid && submitForm() && clearForm();
    }

    const validateForm = (value) => {
        return isFormSubmitted && value.trim() === '';
    }

    const removeUser = (userToRemove) => {
        const filteredUsers = usersData.filter(user => user !== userToRemove)
        setUsersData(filteredUsers)
    }

    return (
        <>
            <form>
                <div>
                    <input id={'username'} placeholder={'Name'} value={inputsValues.username} onChange={handleInputsChange} />
                    {validateForm(inputsValues.username) && <p>Name is required</p>}
                </div>
                <div>
                    <input id={'password'} placeholder={'Password'} value={inputsValues.password} onChange={handleInputsChange} type={'password'} />
                    {validateForm(inputsValues.password) && <p>Password is required</p>}
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </form>
            {usersData.map((user, i) => {
                return (
                    <div key={i}>  
                        <li>{user.username}</li>
                        <button onClick={() => removeUser(user)}>X</button>
                    </div>
                )
            })}
        </>
    )
}