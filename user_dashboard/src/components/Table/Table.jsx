import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { container, userList, table, editButton, deleteButton } from './Table.styles';

export const Table = () => {
    const [userData, setUserData] = useState(undefined);
    const history = useHistory();

    const redirectToForm = () => {
        history.push('/form')
    }

    const getUserData = async() => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
            setUserData(response.data)
        } catch (err) {
            console.warn(err);
        }
    }
    
    useEffect(() => {
      getUserData()
    }, []);


    return (
        <div className={container}>
            <div className={userList}>
                <p>User list</p>
                <button onClick={redirectToForm}>Add new</button>
            </div>
            <table className={table}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userData?.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>  
                                <td>{user.name}</td>
                                <td>{user.username}</td>  
                                <td>{user.email}</td>
                                <td>{user.address.city}</td>  
                                <td><button className={editButton}>edit</button></td>
                                <td><button className={deleteButton}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>            
            </table>
        </div>
    )
}