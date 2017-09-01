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
    const array = [];
    return dispatch => {
        // console.log("key", IdKeys)
        firebase.database().ref('No1Collection/').once('value', (data) => {
            let obj = data.val()
            // AllData.objKey = data.key;
            // let SuposeArray = [];
            let localArray = [];
            // for (var prop in obj) {
            //     obj[prop].prokey = prop;
            //     SuposeArray.push(obj[prop])
            // }
            console.log('SuposeArray',obj);
            
            for (var i = 0; i < obj.length; i++) {
                if (obj[i] === IdKeys) {
                    localArray.push(obj[i])
                }
            }
            console.log('localArray',localArray);
            // console.log('SuposeArray',SuposeArray);
          
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