import React, { useState, useEffect } from 'react';
import axios from 'axios';


export const Table = () => {
    const [userData, setUserData] = useState(undefined);

    const getUserData = async() => {
        try {
            const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
            console.log(response.data)
            setUserData(response.data)
        } catch (err) {
            console.warn(err);
        }
    }
    
    useEffect(() => {
      getUserData()
    }, []);

    return (
        <>
            <h1>Dashboard</h1>
            <div>
                <p>User list</p>
                <button>Add new</button>
            </div>
            <table>
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
                                <td><button>edit</button></td>
                                <td><button>delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>            
            </table>
        </>
    )
}