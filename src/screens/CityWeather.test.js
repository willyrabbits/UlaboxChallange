import { render, fireEvent } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/configure-store'
import {
    BrowserRouter as Router,
} from "react-router-dom";

test('check LOAD weather data', () => {
    const { container, getAllByTestId, getByTestId } = render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
    fireEvent.click(getAllByTestId('city-card')[0])
    expect(getByTestId('city-weather-loader')).toBeTruthy()
    // TODO: figure out how to check if element DO NOT exisit in the DOM
});

// TODO: simulate fetching data form the API and test it