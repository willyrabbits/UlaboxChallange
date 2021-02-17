import './CitiesList.css';
import CityCard from "../CityCard/CityCard.js";

import cities from '../../data/cities.json'

export default function CitiesList() {
    return (
        <div className="cards-container" data-testid="cards-container">
            {cities.map(i =>
                <CityCard key={i.abbreviation} city={i} />
            )}
        </div>
    )
}


