import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { generatePath, Link } from 'react-router-dom';

export const Countries = () => {
    const [data, setData] = useState(undefined);

    // const getData = () => {
    //     fetch('https://restcountries.eu/rest/v2/all')
    //         .then(response => response.json())
    //         .then(data => console.log(data))
    //         .catch(err => console.warn(err))
    // }

    // const getData = async() => {
    //     try {
    //         const response = await (await fetch('https://restcountries.eu/rest/v2/all')).json()
    //         console.log(response)
    //     } catch (err) {
    //         console.warn(err)
    //     }
    // }

    const getData = async() => {
        try {
            const response = await axios.get('https://restcountries.eu/rest/v2/all');
            setData(response.data);
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getData();
    }, []);
    
    return (
        <>
            {data?.map((el, index) => {
                return (
                    <ul key={index}>
                        <li>{el.name}</li>
                        <Link to={generatePath('/countries/:id', {id: el.name})}>
                            <button>
                                {el.name}
                            </button>
                        </Link>
                    </ul>
                )
            })}
        </>
    )
}