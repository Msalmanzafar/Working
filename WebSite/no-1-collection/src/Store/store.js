import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AuthReducer from '../Reducers/authReducers';
import AdminReducers from '../Reducers/AdminReducers';


export default createStore(
    combineReducers({
        AuthReducer,
        AdminReducers
    }),{},(applyMiddleware(thunk))
);