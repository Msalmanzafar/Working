
import React, { Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute} from 'react-router';
import * as firebase from 'firebase';
import NavBar from './Component/NavBar/navBar'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppTheme from "./Apptheme";
import Home from "./Component/Home/homePage";
import SignUp from './Component/Authentication/signup';
import LogIn from './Component/Authentication/login';
import ContactUs from './Component/ContactUs/contactUs';
import AboutNo1Collection from './Component/About/about';
import ProductGallery from './Component/ProductGallery/Gallery'
//The Febric sectiion
import TheFebricStore from './Component/TheFebric/Index';
import FebricHome from './Component/TheFebric/Home/febricHome'

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();



var config = {
    apiKey: "AIzaSyBIaQC5Ei8ZFQ9Cp5_9ClzPYvBe2KtVkvo",
    authDomain: "no1collection-dbc89.firebaseapp.com",
    databaseURL: "https://no1collection-dbc89.firebaseio.com",
    projectId: "no1collection-dbc89",
    storageBucket: "no1collection-dbc89.appspot.com",
    messagingSenderId: "732993006138"
  };
  firebase.initializeApp(config);



export default class Routes extends Component {
    render() {
        return (
            <MuiThemeProvider muiTheme={AppTheme}>
                <Router history={browserHistory}>
                    <Route path="/" component={NavBar}>
                        <IndexRoute component={Home}/>
                        {/* <Route path='/home' component={Home}/> */}
                        <Route path='/signup' component={SignUp}/>
                        <Route path='/login' component={LogIn}/>
                        <Route path='/contactus' component={ContactUs}/>
                        <Route path='/about' component={AboutNo1Collection}/>
                        <Route path='/pgallery' component={ProductGallery}/>

                    </Route>
                    <Route path='/thefebricstore' component={TheFebricStore}>
                        <IndexRoute component={FebricHome} />
                        <Route path='/febrichome' component={FebricHome}/>
                    </Route>
                </Router>
            </MuiThemeProvider>
        )
    }
}
