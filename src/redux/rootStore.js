import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';

import gameReduces from './reducers/gameReduces';

const rootReducers = combineReducers({gameReduces});
const store = createStore(rootReducers, applyMiddleware(thunk));

export default store;
