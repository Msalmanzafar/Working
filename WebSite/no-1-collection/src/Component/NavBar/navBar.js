import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import './styles.css';
import * as mat from 'material-ui';
import { LogOutAction } from '../../Actions/AuthActions';
import { AdminAction } from '../../Actions/AdminAction';
import { connect } from 'react-redux';
import logo from '../Images/logo1.png'
import Logo1 from '../Images/The-Fabric-Store.png';
import Logo2 from '../Images/Trendz.png';
import Logo3 from '../Images/Vintage.png';



class NavBar extends Component {
    constructor(props) {
        super(props);
        this.Home = this.Home.bind(this);
        this.Contact_Us = this.Contact_Us.bind(this);
        this.About = this.About.bind(this);
        this.thefebric = this.thefebric.bind(this);
        this.trendzStore = this.trendzStore.bind(this);
        this.Vintage = this.Vintage.bind(this);
        this.Viscose = this.Viscose.bind(this);
        this.Wellvet = this.Wellvet.bind(this);
        this.Jackward = this.Jackward.bind(this);
        this.Arz = this.Arz.bind(this);
        this.Jute = this.Jute.bind(this);
        this.Exclusive = this.Exclusive.bind(this);
        this.Organza = this.Organza.bind(this);
        this.Others = this.Others.bind(this);
        this.AdminPage = this.AdminPage.bind(this);
        this.Mission = this.Mission.bind(this);
        this.SignUp = this.SignUp.bind(this);
        this.LogIn = this.LogIn.bind(this);
        this.LogOut = this.LogOut.bind(this);
    }
    Mission(){
        browserHistory.push('/mission');
    }
    AdminPage() {
        this.props.AdminAction()
        browserHistory.push('/admin');
    }
    Home() {
        browserHistory.push('/');
    }
    Viscose() {
        browserHistory.push('/viscose');
    }
    Wellvet() {
        browserHistory.push('/wellvet');
    }
    Jackward() {
        browserHistory.push('/jackward');
    }
    Arz() {
        browserHistory.push('/doublearz');
    }
    Jute() {
        browserHistory.push('/jute');
    }
    Exclusive() {
        browserHistory.push('/exclusive');
    }
    Organza() {
        browserHistory.push('/organza');
    }
    Others() {
        browserHistory.push('/others');
    }

    Contact_Us() {
        browserHistory.push('/contactus');
    }
    About() {
        browserHistory.push('/about');
    }
    thefebric() {
        browserHistory.push('/thefabric');
    }
    trendzStore() {
        browserHistory.push('/trendz');
    }
    Vintage() {
        alert("Fabric Available at all leading Outlets.")
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
            users,
        } = this.props;
        // console.log('user---',users.email)
        return (
            <div>
                <div>
                    <div>

                        <nav className="navbar header navbar-fixed-top" >
                            <div className="container">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle " data-toggle="collapse" data-target="#navbar-collapse">
                                        <span className="icon-color icon-bar"></span>
                                        <span className="icon-color icon-bar"></span>
                                        <span className="icon-color icon-bar"></span>
                                    </button>
                                    <span className="navbar-brand" id="logo" style={{ marginTop: -3, marginBottom: 10 }}>
                                        <img src={logo} alt="logo" style={{ width: 70 }} />
                                    </span>
                                </div>
                                <div className="collapse navbar-collapse text-left" id="navbar-collapse">
                                    <ul className="nav link1 navbar-nav">
                                        <li><a id="link" onClick={this.Home}>Home</a></li>

                                        <li className="dropdown">
                                            <a className="dropdown-toggle" id="link" data-toggle="dropdown">Brands
                                                <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu child">
                                                <li>
                                                    <a id="link" onClick={this.thefebric}>
                                                        <img style={{ width: 40, marginRight: 6 }} src={Logo1} alt='FebricStore' />
                                                        The Fabric Store</a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.trendzStore}>
                                                        <img style={{ width: 40, marginRight: 6 }} src={Logo2} alt="Trendz" />
                                                        Trendz</a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Vintage}>
                                                        <img style={{ width: 40, marginRight: 6 }} src={Logo3} alt="Vintage" />
                                                        Vintage</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown">
                                            <a className="dropdown-toggle" id="link" data-toggle="dropdown" >
                                                Products Gallery
                                                    <span className="caret"></span>
                                            </a>
                                            <ul className="dropdown-menu child">
                                                <li>
                                                    <a id="link" onClick={this.Viscose}>
                                                        Viscose
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Wellvet}>
                                                        Vellvet
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Jackward}>
                                                        Jacquard
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Arz}>
                                                        Double Arz
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Jute}>
                                                        Jute
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Exclusive}>
                                                        Exclusive
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Organza}>
                                                        Organza
                                                    </a>
                                                </li>
                                                <li>
                                                    <a id="link" onClick={this.Others}>
                                                        Others
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a id="link" onClick={this.Contact_Us}>Contact Us</a></li>
                                        <li><a id="link" onClick={this.About}>About Us</a></li>
                                        <li><a id="link" onClick={this.Mission}>Mission</a></li>

                                    </ul>

                                    {(!auth) ? (
                                        <ul className="nav navbar-nav navbar-right">
                                            <li><a onClick={this.SignUp} id="link"><span style={{ marginLeft: 8 }} className="glyphicon glyphicon-user"></span> Sign Up</a></li>
                                            <li><a onClick={this.LogIn} id="link"><span style={{ marginLeft: 8 }} className="glyphicon glyphicon-log-in"></span> Login</a></li>

                                        </ul>
                                    ) : (
                                            <span>
                                                {(users.email === 'hr.no1collection@gmail.com') ? (
                                                    <ul className="nav navbar-nav navbar-right">
                                                        <li><a id="link" onClick={this.AdminPage}>Customers</a></li>
                                                        <li><a id="link" onClick={this.LogOut}>
                                                            <span style={{ marginLeft: 8 }} className="glyphicon glyphicon-log-out"></span> Log Out</a>
                                                        </li>
                                                    </ul>
                                                ) : (
                                                        <ul className="nav navbar-nav navbar-right">
                                                            <li><a id="link">Setting</a></li>
                                                            <li><a id="link" onClick={this.LogOut}>
                                                                <span style={{ marginLeft: 8 }} className="glyphicon glyphicon-log-out"></span> Log Out</a>
                                                            </li>
                                                        </ul>
                                                    )}
                                            </span>

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
                <div style={{ marginTop: 90 }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.AuthReducer.authLogOut,
        SnackBars: state.AuthReducer.Visited,
        users: state.AuthReducer.authSignIn,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        LogOutAction: () => {
            dispatch(LogOutAction());
        },
        AdminAction: () => {
            dispatch(AdminAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);