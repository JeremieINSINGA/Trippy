import React, { useState, useEffect } from 'react'
import getHomeData from '../utils/Api';
import CityCard from './CityCard';

export default function Home() {
    const [cities, setCities] = useState([]);

    useEffect(() => {
        getHomeData().then(towns => {
            setCities(towns);
        })
    }, []);

    return (
        <div className="container">
            <h1>Découvrir le monde</h1>
            <div className="d-flex justify-content-center flex-wrap">
                {cities?.map(city => (
                    <CityCard key={city.name} city={city} />
                ))}
            </div>
        </div>
    )
}