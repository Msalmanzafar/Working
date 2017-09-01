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
export function CustomerDetails(IdKeys) {
    return dispatch => {
        firebase.database().ref('No1Collection/').once('value', (data) => {
            let obj = data.val()
            // console.log("IdKeys", IdKeys);
            let SuposeArray = [];
            let localArray = [];
            for (var prop in obj) {
                obj[prop].prokey = prop;
                SuposeArray.push(obj[prop])
            }
            for (var i = 0; i < SuposeArray.length; i++) {
                if (SuposeArray[i].key === IdKeys) {
                    localArray.push(SuposeArray[i])
                }
            }
            // console.log("SuposeArray", SuposeArray);
            // console.log("localArray", localArray);
            dispatch(ViewDispatch(localArray));
            
        })
    }
}

function ViewDispatch(payload){
    return{
        type: ActionTypes.DataViewAction,
        payload
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