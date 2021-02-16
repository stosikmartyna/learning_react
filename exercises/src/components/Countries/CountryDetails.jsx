import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export const CountryDetails = () => {
    const [countryDetails, setCountryDetails] = useState(undefined);
    const {id} = useParams();

    const getCountryDetails = useCallback(async() => {
        try {
            const response = await axios.get(`https://restcountries.eu/rest/v2/name/${id}`);
            setCountryDetails(response.data)
        } catch (err) {
            console.warn(err);
        }
    }, [id]);

    useEffect(() => {
        getCountryDetails();
    }, [getCountryDetails]);

    return (
        <>
            {countryDetails?.map((country, index) => {
                return (
                    <div key={index}>
                        <p>{country.name}</p>
                        <p>{country.capital}</p>
                        <p>{country.region}</p>
                        <p>{country.subregion}</p>
                    </div>
                )
            })}
        </>
    )
}