import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'

import Data from './data';


const rootReducer = combineReducers({Data, routing: routerReducer  })

export default rootReducer;