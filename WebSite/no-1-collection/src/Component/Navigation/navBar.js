import React, { Component } from 'react';
import { Link } from 'react-router';
import * as mat from 'material-ui';
import DrawerUndockedExample from './navbar-child'
import Logo from '../Images/No1-Collections12.png'


const styles = {
    appBar: {
        boxShadow: '0px 5px 12px gray',
        height: 70
    },
    title: {
        cursor: 'pointer',
    },
    headerButton: {
        marginTop: '10px',
        // border: '2px solid black',
        fontWeight: 'bold',

    },
    button: {
        color: 'white',
        fontFamily: 'Verdana',
        textShadow: '1px 1px 2px black',
    },
    logo: {
        width: 195 , 
        height: 65,
        marginTop: -6,
        marginBottom: -8,
        marginLeft: 10
    },
    loader: {
        position: 'relative',
        height: '4px',
        width: '100%',
        backgroundColor: '#009688',
    }
};

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }
    logOut() {
        console.log("logOut");
        // this.props.LogOutAction();
    }
    render() {
        // const {
        //     auth,
        //     Loaders,
        // } = this.props;
        return (

            <div >

                <mat.AppBar
                    style={styles.appBar}
                    title={
                        <span >
                            <img 
                                src={Logo} 
                                alt="logo" 
                                style={styles.logo}
                            />    
                        </span>
                    }
                    iconElementLeft={
                        <span>
                            <DrawerUndockedExample />
                        </span>
                    }
                    iconElementRight={
                        <div style={styles.headerButton}>
                            <span >
                                <Link to='/signup'>
                                    <mat.FlatButton style={styles.button} label="Sign Up" />
                                </Link>
                            </span>
                            <span>
                                <Link to='/login'>
                                    <mat.FlatButton style={styles.button}
                                        label="Log In"
                                    />
                                </Link>
                            </span>

                        </div>
                    }
                />
                {this.props.children}
            </div>
        );
    }
}
// const mapStateToProps = (state) => {
//   return {
//     auth: state.AuthReducer.authLogOut,
//     Loaders: state.AuthReducer.loader,
//   };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     LogOutAction: () => {
//       dispatch(LogOutAction());
//     }
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBar;