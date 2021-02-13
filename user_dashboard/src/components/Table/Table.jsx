import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { container, userList, table, editButton, deleteButton } from './Table.styles';

export const Table = ({ users, setUsers }) => {
    const history = useHistory();

    const redirectToForm = () => {
        history.push('/form')
    }

    const getUserData = useCallback(async() => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
            setUsers(response.data)
        } catch (err) {
            console.warn(err);
        }
    }, [setUsers])
    
    useEffect(() => {
      getUserData()
    }, [getUserData]);


    const removeUser = (userToRemove) => {
        const filteredUsers = users.filter(user => user !== userToRemove)
        setUsers(filteredUsers)
    }

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
                    {users?.map(user => {
                        return (
                            <tr key={user.id}>
                                <td>{user.id}</td>  
                                <td>{user.name}</td>
                                <td>{user.username || ''}</td>  
                                <td>{user.email}</td>
                                <td>{user.address?.city || ''}</td>  
                                <td><button className={editButton}>edit</button></td>
                                <td><button onClick={() => removeUser(user)} className={deleteButton}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>    
            </table>
        </div>
    )
}