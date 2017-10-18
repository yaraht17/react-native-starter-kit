import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import createSagaMiddleware from 'redux-saga';
import { persistStore, autoRehydrate } from 'redux-persist';

import reducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];
if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}
const enhancer = [autoRehydrate(), applyMiddleware(...middleware)];

const store = createStore(reducer, {}, compose(...enhancer));

sagaMiddleware.run(rootSaga);
persistStore(
  store,
  {
    storage: AsyncStorage,
    keyPrefix: 'RNStarterKit', //change when request new 
    // debounce: 500,
    // blacklist: ['form', 'ui', 'requests', 'toast'] 
  },
  null
);

export default store;