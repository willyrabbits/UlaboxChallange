import './CityCard.css';

import { Link } from "react-router-dom";


const PATH_TO_IMG = 'img/'
export default function CityCard(props) {

    const { city } = props

    return (
        <Link className="city-card" to={`/${city.name.toLowerCase()}`} style={{ color: 'inherit', textDecoration: 'inherit' }} data-testid="city-card">
            <img className="city-card-img" alt={`${city.name} skyline`} src={`${PATH_TO_IMG}${city.img}`} />
            <span className="city-card-desc">{city.abbreviation}</span>
        </Link>
    )
}


