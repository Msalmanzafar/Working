import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import ActionTypes from '../Action_Types/actionTypes';


// Create New Account and Database 
export function CreateNewUserAction(newUserOption) {
    return dispatch => {
        // console.log("newUserOption" ,newUserOption)
        dispatch(LoadingAction());
        firebase.auth()
            .createUserWithEmailAndPassword(newUserOption.email, newUserOption.password)
            .then((user) => {
                dispatch(LoadingAction());
                dispatch(SanckBarAction());
                dispatch(ErrorMessageDispatch());
                let firebaseData = {
                    email: newUserOption.email,
                    fullName: newUserOption.fullName,
                    cellNumber: newUserOption.cellNumber,
                    address: newUserOption.address,
                    shopName: newUserOption.shopName,
                    cityName: newUserOption.cityName
                };
                firebase.database().ref('No1Collection/' + user.uid).set(firebaseData)
                    .then(() => {
                        setTimeout(() => {
                            dispatch(SanckBarAction())
                            browserHistory.push('/login');
                        }, 2000)
                    });
            })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage))
                dispatch(LoadingAction());

            });
    }
}
// ------------------------------------------------------------------------------------------------


// Login User Function

export function UserLogInAction(LogInUser) {
    return dispatch => {
        // console.log('logIn Action',LogInUser);
        dispatch(LoadingAction());
        firebase.auth().signInWithEmailAndPassword(LogInUser.email, LogInUser.password)
            .then((user) => {
                dispatch(LoadingAction());
                dispatch(UserLoginDispatch(user));
                dispatch(SanckBarAction());
                dispatch(ErrorMessageDispatch());
                setTimeout(() => {
                    dispatch(SanckBarAction());
                    browserHistory.push('/');
                }, 2000)
            })
            .catch((error) => {
                var errorMessage = error.message;
                dispatch(ErrorMessageDispatch(errorMessage));
                dispatch(LoadingAction());
            });
    }
}
//------------------------------------------------------------------------------------------

// LogOut User Function

export function LogOutAction() {
    return dispatch => {
        // console.log("logOut")
        firebase.auth().signOut()
            .then(() => {
                dispatch(VisitedDisptach());
                dispatch(UserLoginDispatch());
                setTimeout(() => {
                    dispatch(VisitedDisptach());
                }, 2000)
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);// An error happened.
            });
    }
}
//--------------------------------------------------------------------------------------------

function UserLoginDispatch(payload) {
    return {
        type: ActionTypes.UserLogIn,
        payload
    }
}

function ErrorMessageDispatch(payload) {
    return {
        type: ActionTypes.ErrorMessages,
        payload
    }
}

function SanckBarAction() {
    return {
        type: ActionTypes.SncakBar
    }
}

function LoadingAction() {
    return {
        type: ActionTypes.LoadingAction
    }
}

function VisitedDisptach(){
    return{
        type: ActionTypes.VisitedAction
    }
}