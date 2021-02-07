import React, { useState } from 'react';

export const Form = () => { 
    const [inputsValues, setInputsValues] = useState({
        username: '',
        password: '',
    });
    const [usersData, setUsersData] = useState([]);

    const handleInputsChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const isValid = inputsValues.username.trim() !== '' 
            && inputsValues.password.trim() !== ''

        const submitValidateForm = () => {
            setUsersData([...usersData, inputsValues])
            setInputsValues({
                username: '',
                password: ''
            })
        }
        isValid && submitValidateForm();
    }

    const removeUser = (userToRemove) => {
        const filteredUsers = usersData.filter(user => user !== userToRemove)
        setUsersData(filteredUsers)
    }

    return (
        <>
            <form>
                <input id={'username'} placeholder={'Name'} value={inputsValues.username} onChange={handleInputsChange} />
                <input id={'password'} placeholder={'Password'} value={inputsValues.password} onChange={handleInputsChange} type={'password'} />
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