import './App.css';
import {
  Switch,
  Route,
  useLocation,
  Link
} from "react-router-dom";

import Home from "./screens/Home";
import CityWeather from "./screens/CityWeather";

import { BackIcon } from "./components/Icons"

function App() {
  const location = useLocation();
  return (
    <div className="app">
      <header className="app-header">
        {location.pathname !== '/' && <Link to='/' className='app-header-back'><BackIcon fill='#FF5D77' /></Link>}
        <span>
          Ulabox JavaScript React Test
        </span>
      </header>
      <div className="app-content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:city">
            <CityWeather />
          </Route>
        </Switch>

      </div>
      <footer className="app-footer">© Created by Guille Martínez Conejos, February 2021</footer>
    </div>
  );
}

export default App;
