// import {handleActions} from 'redux-actions';
import ActionTypes from '../Action_Types/actionTypes';

const AdminReducers = (state = {
    loader: false,
    AdminData: [],
    AdminView: '',
}, action) => {
    switch (action.type) {
        case ActionTypes.AdminDisptch:{
            return state ={
                ...state,
                AdminData: action.payload
            }
        }
        case ActionTypes.loaders:{
            return state ={
                ...state,
                loader: !state.loader
            }
        }
        case ActionTypes.DataViewAction:{
            return state ={
                ...state,
                AdminView: action.payload
            }
        }
        default: { }
    }
    return state;
}
export default AdminReducers;
