import { counterReducer } from './reducer';
import { createStore } from 'redux';

export const applicationStore = createStore(counterReducer);