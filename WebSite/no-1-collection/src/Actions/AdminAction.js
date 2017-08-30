// import { browserHistory } from 'react-router';
import * as firebase from 'firebase';
import ActionTypes from '../Action_Types/actionTypes';


export function AdminAction() {
    return dispatch => {
        // var userId = firebase.auth().currentUser.uid; 
        dispatch(LoaderDispatch())
        firebase.database().ref('No1Collection/').on('value', (data) => {
            let AllData = data.val()
            dispatch(dispatchAdmin(AllData));
            dispatch(LoaderDispatch())

        })
    }
}
export function CustomerDetails(key) {
    const array = [];
    return dispatch => {
        console.log("key", key)
        firebase.database().ref('No1Collection/').once('value', (data) => {
            let AllData = data.val()

            // console.log("data", key);
            // console.log("data", AllData.id);

            // if (AllData === key) {
            //     // array.concat(AllData)
            //     console.log('selected data');
            //     // dispatch(MySatatusOfComplaints(complaint))
            // }
        })
    }
}

function LoaderDispatch() {
    return {
        type: ActionTypes.loaders,
    }
}
function dispatchAdmin(payload) {
    return {
        type: ActionTypes.AdminDisptch,
        payload
    }
}