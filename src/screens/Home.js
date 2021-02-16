import React from 'react'
import CitiesList from "../components/CitiesList/CitiesList.js";

export default function Home() {
    return (
        <div className="cities-list-container">
            <span className="cities-list-container-subtitle">which city do you want to travel to?</span>
            <CitiesList />
            <div className="app-200-blank-separator" />
        </div>
    )
}
