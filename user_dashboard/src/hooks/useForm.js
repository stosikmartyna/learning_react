import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { BASE_PATH } from "../components/helpers";

export const useForm = (users, setUsers) => {
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [inputsValues, setInputsValues] = useState({
        name: '',
        email: '',
    })

    const history = useHistory();
    const {id} = useParams();
    const isEditForm = !!id;

    const handleInputsChange = (event) => {
        setInputsValues({...inputsValues, [event.target.id]: event.target.value});
    }

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
    }, [inputsValues, id]);

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

    const updateUserData = async() => {
        try {
            await axios.put(`${BASE_PATH}/${id}`, inputsValues);
            alert('User data updated successfully');
            history.push('/');
        } catch (err) {
            console.warn(err);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const isFormValid = inputsValues.name.trim() !== ''
                && inputsValues.email.trim() !== ''

        setIsFormSubmitted(true);
        const submit = () => isEditForm ? updateUserData() : postUserData()
        isFormValid && submit() && redirectToTable();;
    }

    const redirectToTable = () => {
        history.push('/');
    }

    useEffect(() => {
        isEditForm && getUserData();
    }, []);

    return {
        handleInputsChange,
        handleSubmit,
        redirectToTable,
        isFormSubmitted,
        inputsValues,
    }
}