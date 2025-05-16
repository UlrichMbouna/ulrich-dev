import { applyMiddleware, createStore, compose } from 'redux';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk';  // Correct l'import de redux-thunk

import RootReducer from './routeredux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  RootReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger)  // Utilisation du middleware redux-thunk
  )
);

export default store;
