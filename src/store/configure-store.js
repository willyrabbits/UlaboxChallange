import { createStore } from 'redux';
import { weatherReducer } from './reducer/index'

export const store = createStore(weatherReducer);