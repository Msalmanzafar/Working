import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './styles.css';
import * as mat from 'material-ui';
import { LogOutAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';
import Logo1 from '../Images/main3.jpg';

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.Home = this.Home.bind(this);
        this.Gallery = this.Gallery.bind(this);
        this.Contact_Us = this.Contact_Us.bind(this);
        this.About = this.About.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.LogIn = this.LogIn.bind(this);
        this.LogOut = this.LogOut.bind(this);


    }
    Home() {
        browserHistory.push('/');
    }
    Gallery() {
        browserHistory.push('/pgallery');
    }
    Contact_Us() {
        browserHistory.push('/contactus');
    }
    About() {
        browserHistory.push('/about');
    }
    SignUp() {
        browserHistory.push('/signup');
    }
    LogIn() {
        browserHistory.push('/login');
    }
    LogOut() {
        this.props.LogOutAction();
    }
    render() {
        const {
            auth,
            SnackBars,
            user,
        } = this.props;
        return (
            <div>
                <div>
                    <div>
                        <nav className="navbar header" id="my-navbar">
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#navbar-collapse">
                                        <span className="icon-color icon-bar"></span>
                                        <span className="icon-color icon-bar"></span>
                                        <span className="icon-color icon-bar"></span>
                                    </button>
                                    <span className="navbar-brand" id="logo">No1Collection</span>
                                </div>
                                <div className="collapse navbar-collapse text-left" id="navbar-collapse">
                                    <ul className="nav link1 navbar-nav">
                                        <li><a id="link" onClick={this.Home}>Home</a></li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" id="link" data-toggle="dropdown">Brands
                                                <span className="caret"></span></a>
                                            <ul className="dropdown-menu child">
                                                <li><a id="link" >
                                                    <img style={{ width: 50, marginRight: 4 }} src={Logo1} alt='FebricStore' />
                                                    The Febric Store</a>
                                                </li>
                                                <li><a id="link" >Trendz</a></li>
                                                <li><a id="link" >Vintage</a></li>
                                            </ul>
                                        </li>
                                        <li><a id="link" onClick={this.Gallery}>Gallery</a></li>
                                        <li><a id="link" onClick={this.Contact_Us}>Contact Us</a></li>
                                        <li><a id="link" onClick={this.About}>About Us</a></li>

                                    </ul>

                                    {(!auth) ? (
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a onClick={this.SignUp} id="link"><span style={{ paddingLeft: 12 }} className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                            <li><a onClick={this.LogIn} id="link"><span style={{ paddingLeft: 12 }} className="glyphicon glyphicon-log-in"></span> Login</a></li>

                                        </ul>
                                    ) : (
                                            <ul className="nav navbar-nav navbar-right">

                                                {/* <li><a onClick={this.LogOut} id="link"><span style={{ paddingLeft: 12 }} className="glyphicon glyphicon-log-out"></span> Log Out</a></li> */}
                                                <mat.Avatar
                                                    style={{ marginTop: 10, cursor: 'pointer' }}
                                                    size={40}
                                                    data-toggle="dropdown"
                                                    className="dropdown-toggle"
                                                />
                                                <ul className="dropdown-menu child">
                                                    <li><a id="link" >Setting</a></li>
                                                    <li><a id="link" onClick={this.LogOut}>Log Out</a></li>
                                                </ul>
                                            </ul>

                                        )}

                                </div>
                            </div>
                        </nav>
                    </div>
                    <div>
                        <mat.Snackbar
                            open={SnackBars}
                            message="Thanks for Visting"
                            bodyStyle={{ backgroundColor: '#b71c1c', color: '#ffffff' }}
                        />
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        SnackBars: state.AuthReducer.Visited,
        user: state.AuthReducer.authSignIn,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogOutAction: () => {
            dispatch(LogOutAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);