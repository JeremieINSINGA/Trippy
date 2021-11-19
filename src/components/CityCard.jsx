import React from 'react'
import { Link } from 'react-router-dom'

export default function CityCard({city}) {
    console.log(`city`, city)

    return (
        <div className="card m-3" style={{width: "18rem"}}>
            <Link to={`/hotels/${city.slug}`}>
                <img className="card-img-top" src={city.source ? `http://localhost:3002/img/${city.slug}.png` : "http://via.placeholder.com/300x200"} alt={city.name} />
                <div className="card-body">
                    <h5 className="card-title">{city.name}</h5>
                </div>
            </Link>
        </div>
    )
}
