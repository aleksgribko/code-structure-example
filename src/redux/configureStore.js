import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from './middleware/logger';
import rootReducer from './rootReducer';

const configureStore = (preloadedState) => {
  const middlewareEnhancer = applyMiddleware(loggerMiddleware, thunkMiddleware);

  const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

  return store;
};

export default configureStore;
