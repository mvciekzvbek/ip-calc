import { applyMiddleware, createStore } from 'redux'
import rootReducer from './reducers';
import {createWrapper} from 'next-redux-wrapper';

const bindMiddleware = (middleware) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension')
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

export const makeStore = (context) => {
  // const sagaMiddleware = createSagaMiddleware()
  // const store = createStore(rootReducer, bindMiddleware([sagaMiddleware]))
  
  // store.sagaTask = sagaMiddleware.run(rootSaga)
  
  // return store
  
  const store = createStore(rootReducer, bindMiddleware([]));
  return store;
}
  
// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});