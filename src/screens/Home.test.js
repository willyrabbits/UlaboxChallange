import { render } from '@testing-library/react';
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../store/configure-store'
import {
    BrowserRouter as Router,
} from "react-router-dom";
import cities from '../data/cities.json'

test('renders list of cities', () => {
    const { getAllByTestId } = render(
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    )
    expect(getAllByTestId('city-card').length).toBe(cities.length)
});