import { createStore, compse } from 'redux';
import { syncHistoryWithStore} from 'react-router-redux';
import { BrowserRouter } from 'react-router-dom';

// import the root reducer
import rootReducer from './reducers/index';


import Data from './data/data';

// create an object for the default data
const defaultState = {
  Data,

};

const store = createStore(rootReducer, defaultState);



export default store;
