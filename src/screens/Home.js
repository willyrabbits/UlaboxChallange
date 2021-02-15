import React from 'react'
import CitiesList from "../components/CitiesList/CitiesList.js";

export default function Home() {
    return (
        <div>
            <span className="app-content-subtitle">which city do you want to travel to?</span>
            <CitiesList />
        </div>
    )
}
