import { fireEvent, render } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/configure-store'
import {
  BrowserRouter as Router,
} from "react-router-dom";

test('renders header & footer', () => {
  const { container } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
  expect(container.querySelector('header')).toHaveTextContent('Ulabox JavaScript React Test')
  expect(container.querySelector('footer')).toBeTruthy()
});



test('navigate to city detail screen', () => {
  const { container, getAllByTestId, queryAllByTestId } = render(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
  fireEvent.click(getAllByTestId('city-card')[0])

  expect(container.querySelector('header')).toHaveTextContent('Ulabox JavaScript React Test')
  expect(container.querySelector('footer')).toBeTruthy()
  expect(queryAllByTestId('city-weather-screen')).toBeTruthy()
});


