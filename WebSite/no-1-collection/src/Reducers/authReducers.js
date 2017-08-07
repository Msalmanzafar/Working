// import {handleActions} from 'redux-actions';
import ActionTypes from '../Action_Types/actionTypes';

const AuthReducer = (state = {
    authLogOut: false,
    authSignIn: [],
    ErrorMess: '',
    Snack: false,
    Visited: false,
    loader: false,
}, action) => {
    switch (action.type) {
        case ActionTypes.VisitedAction:{
            return state ={
                ...state,
                Visited: !state.Visited
            }
        }
        case ActionTypes.SncakBar:{
            return state ={
                ...state,
                Snack: !state.Snack
            }
        }
        case ActionTypes.LoadingAction:{
            return state ={
                ...state,
                loader: !state.loader
            }
        }
        case ActionTypes.UserLogIn: {
            return state = {
                ...state,
                authLogOut: !state.authLogOut,
                authSignIn: action.payload
            };
        }
        case ActionTypes.ErrorMessages: {
            return state = {
                ...state,
                ErrorMess: action.payload
            };
        }
        default: { }
    }
    return state;
}
export default AuthReducer;
