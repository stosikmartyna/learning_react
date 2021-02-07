import React, { useEffect, useState } from 'react';

export const DataFromJson = () => {
    const [data, setData] = useState(undefined);

    const fetchData = async () => {
        // fetch('./waste.json')
        //     .then(response => response.json())
        //     .then(response => setData(response))
        //     .catch(err => console.error(err))

        try {
            const response = await fetch('./waste.json');
            const data = await response.json();
            setData(data); 
        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            {data?.map((waste, i) => {
                return (
                    <p key={i}>{waste.name}</p>
                )
            })}
        </>
    )
}