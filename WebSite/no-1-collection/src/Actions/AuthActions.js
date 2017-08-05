import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import ActionTypes from '../Action_Types/actionTypes';



export function CreateNewUserAction(newUserOption) {
    return dispatch => {
        // console.log("newUserOption" ,newUserOption)
        dispatch(LoadingAction());
        firebase.auth()
            .createUserWithEmailAndPassword(newUserOption.email, newUserOption.password)
            .then((user) => {
                dispatch(LoadingAction());

                dispatch(SanckBarAction())

                let firebaseData = {
                    email: newUserOption.email,
                    fullName: newUserOption.fullName,
                    cellNumber: newUserOption.cellNumber
                };
                firebase.database().ref('No1Collection/' + user.uid).set(firebaseData)
                    .then(() => {
                        setTimeout(() => {
                            dispatch(SanckBarAction())
                            browserHistory.push('/login');

                        }, 4000)
                    });
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                // alert(errorMessage);
                dispatch(ErrorMessageDispatch(errorMessage))
                // console.log(errorMessage);
            });
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