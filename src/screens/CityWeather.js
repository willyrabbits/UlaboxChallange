import React from 'react'
import {
    useParams
} from "react-router-dom";
import { Grid as Loader } from 'react-spinners-css';
import { RefreshIcon } from "../components/Icons"
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useSelector, useDispatch } from "react-redux"

export default function CityWeather() {
    const { city } = useParams();

    const dispatch = useDispatch()

    const [cityWeather, setCityWeather] = React.useState({})
    const [isLoading, setIsLoading] = React.useState(true)
    const [fetchingError, setFetchingError] = React.useState(false)
    const [iconUrl, setIconUrl] = React.useState('')
    const [tempUnit, setTempUnit] = React.useState(useSelector(state => state))
    const [realoadTime, setRealoadTime] = React.useState(undefined)

    /* Function to fetch data from API, consider moving it into another module */
    const getCityWeather = async (cityName) => {
        if (cityName.includes(' ')) {
            cityName = cityName.replace(' ', '+')
        }
        const url = `${process.env.REACT_APP_ENDPOINT_QUERY}${cityName}&appid=${process.env.REACT_APP_API_KEY}`
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoading(false)
                    setFetchingError(false)
                    setCityWeather(result)
                    setRealoadTime(new Date())
                    setIconUrl(`http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`)
                },
                (error) => {
                    setIsLoading(false)
                    setFetchingError(true)
                    console.error(error)
                    setCityWeather({})
                }
            )

    }

    const transformDegrees = (kelvin, unit = 'K') => {
        // by default temperature comes in Kelvins, transform it to C or F
        let degrees = kelvin
        switch (unit) {
            case 'C':
                degrees = kelvin - 273.15;
                break;
            case 'F':
                degrees = (kelvin - 273.15) * 9 / 5 + 32
                break;
            default:
                break;
        }
        degrees = degrees.toFixed(1)
        return (<span>{degrees} º{unit}</span>)
    }

    React.useEffect(() => {
        getCityWeather(city);
        /* refresh the weather data every minute */
        setInterval(() => { getCityWeather(city) }, 60000);
    }, [city])


    const handleTempUnitChanged = (event, newTempUnitValue) => {
        if (newTempUnitValue !== null) {
            setTempUnit(newTempUnitValue);
        }
    };

    if (isLoading) return (<Loader color="#FF5D77" size={50} />)
    if (fetchingError) return (<p>it looks like there is some problem fetching the API, please try again later</p>)

    return (
        <div>
            {realoadTime &&
                <div className="last-reload">
                    <div onClick={() => getCityWeather(city)}>
                        <RefreshIcon fill={'#999'} />
                    </div>
                    <span>Last reload: Today {`${realoadTime.getHours()}:${realoadTime.getMinutes()}:${realoadTime.getSeconds()}`}</span>
                </div>
            }
            <div className="detail-weather">
                <img className="detail-weather-img" alt="weather icon" src={iconUrl} />
                <div className="detail-weather-info">
                    <span className="city-name">{cityWeather.name?.toUpperCase()}</span>
                    <span className="city-temp">{transformDegrees(cityWeather.main?.temp, tempUnit)}</span>
                </div>
            </div>
            <ToggleButtonGroup
                value={tempUnit}
                exclusive
                onChange={handleTempUnitChanged} >
                <ToggleButton value="C" >
                    <span>Celsius</span>
                </ToggleButton>
                <ToggleButton value="F">
                    <span>Fahrenheit</span>
                </ToggleButton>
            </ToggleButtonGroup>
            <p>tests</p>
            <p>push to master</p>
        </div>
    )
}
