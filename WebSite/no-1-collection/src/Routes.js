
import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
// import * as firebase from 'firebase';
import NavBar from './Component/Navigation/navBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from "./Apptheme";
import Home from "./Component/Home/homePage";
import SignUp from './Component/Authentication/signup';
import LogIn from './Component/Authentication/login';


import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


// var config = {
//     apiKey: "AIzaSyAz-OClI43ywtTv7fMKdCJnc3-LcpZWTcE",
//     authDomain: "inventory-store-2720b.firebaseapp.com",
//     databaseURL: "https://inventory-store-2720b.firebaseio.com",
//     projectId: "inventory-store-2720b",
//     storageBucket: "inventory-store-2720b.appspot.com",
//     messagingSenderId: "190443387553"
//   };
//   firebase.initializeApp(config);



export default class Routes extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <Router history={browserHistory}>
                    <Route path="/" component={NavBar}>
                        <IndexRoute component={Home}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/login' component={LogIn}/>
                        
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}
