import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./screens/Home";
import CityWeather from "./screens/CityWeather";

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <p>
            Ulabox JavaScript React Test
        </p>
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
    </Router>
  );
}

export default App;
