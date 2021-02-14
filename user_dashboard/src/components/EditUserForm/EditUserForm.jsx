import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { BASE_PATH } from '../helpers';

export const EditUserForm = () => {
    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
    });

    const {id} = useParams();
    const history = useHistory();

    const getUserData = useCallback(async() => {
        try {
            const response = await axios.get(`${BASE_PATH}/${id}`);
            const data = response.data;
            setInputsValues({
                ...inputsValues, 
                name: data.name, 
                email: data.email
            });
        } catch (err) {
            console.warn(err);
        }
    }, [inputsValues, id])

    const handleSubmit = async() => {
        try {
            await axios.put(`${BASE_PATH}/${id}`, inputsValues);
            alert('User data updated successfully');
            history.push('/');
        } catch (err) {
            console.warn(err);
        }
    }

    const handleInputChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value})
    }

    useEffect(() => {
        getUserData();
    }, []);

    return (
        <div>
             <input
                 id={'name'}
                 value={inputsValues.name} 
                 onChange={handleInputChange}
             /> 
             <input 
                 id={'email'}
                 value={inputsValues.email} 
                 onChange={handleInputChange}
             /> 
            <button onClick={() => history.push('/')}>Go back</button>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}