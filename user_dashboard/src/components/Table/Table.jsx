import React, { useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { container, userList, table, editButton, deleteButton, infobox } from './Table.styles';
import { BASE_PATH } from '../helpers';

export const Table = ({ users, setUsers }) => {
    const history = useHistory();

    const redirectToCreateForm = () => {
        history.push('/create');
    }

    const redirectToEditForm = (id) => {
        history.push(`/edit/${id}`);
    }

    const getUserData = useCallback(async() => {
        try {
            const response = await axios.get(BASE_PATH);
            setUsers(response.data)
        } catch (err) {
            console.warn(err);
        }
    }, [setUsers]);
    
    useEffect(() => {
      getUserData()
    }, [getUserData]);

    const removeUser = async(userToRemove) => {
        const filteredUsers = users.filter(user => user !== userToRemove)
        // Simulation of API call to remove user from database
        try {
            await axios.delete(BASE_PATH, userToRemove);
        } catch (err) {
            console.warn(err);
        }
        setUsers(filteredUsers);
    }

    const isDataEmpty = users?.length === 0;

    return (
        <div className={container}>
            <div className={userList}>
                <p>User list</p>
                <button onClick={redirectToCreateForm}>Add new</button>
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
                                <td><button onClick={() => redirectToEditForm(user.id)} className={editButton}>edit</button></td>
                                <td><button onClick={() => removeUser(user)} className={deleteButton}>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>    
            </table>
            {isDataEmpty && <div className={infobox}>No data has been found</div>}
        </div>
    )
}