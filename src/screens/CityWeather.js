import React from 'react'
import {
    useParams
} from "react-router-dom";

export default function CityWeather() {
    const { city } = useParams();

    return (
        <div>
            <h3>city: {city}</h3>
        </div>
    )
}
