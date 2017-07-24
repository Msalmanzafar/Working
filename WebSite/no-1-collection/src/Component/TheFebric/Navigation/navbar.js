import React, { Component } from 'react';
import { Link } from 'react-router';
import * as mat from 'material-ui';
import TheFebricMenu from './navBar-child-Febric';
import Logo from '../../Images/TheFabricStore2.png';
import FaSignIn from 'react-icons/lib/fa/sign-in';
// import FaSignOut from 'react-icons/lib/fa/sign-out';
import FaUser from 'react-icons/lib/fa/user';


const styles = {
    appBar: {
        // boxShadow: '0px 5px 12px gray',
        height: 70,
        backgroundColor: '#e27300',
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
        width: 180 , 
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

class NavBarFebric extends Component {
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
                    zDepth={2}
                    titleStyle={{textAlign: 'left'}}
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
                            <TheFebricMenu />
                        </span>
                    }
                    iconElementRight={
                        <div style={styles.headerButton}>
                            <span >
                                <Link to='/signup'>
                                    <mat.FlatButton 
                                        style={styles.button} 
                                        label="Sign Up" 
                                        icon={<FaUser style={{fontSize: 25}}/>}
                                    />
                                </Link>
                            </span>
                            <span>
                                <Link to='/login'>
                                    <mat.FlatButton 
                                        style={styles.button}
                                        label="Log In"
                                        icon={<FaSignIn style={{fontSize: 25}}/>}
                                        
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

export default NavBarFebric;