import React, { Component } from 'react';
// import { Link } from 'react-router';
import * as mat from 'material-ui';
// import { connect } from 'react-redux';
// import { LogOutAction } from '../../Actions/AuthActions';
// import DrawerUndockedExample from './navbar-child'
// import EventLoader from '../Loader/loader';

const styles = {
  appBar: {
    // backgroundColor: '#00b5a4',
  },
  title: {
    cursor: 'pointer',
  },
  headerButton: {
    marginTop: '5px',
  },
  button: {
    color: 'white',
    fontFamily: 'Verdana'
  },
  logo: {
    width: '145px',
    height: '32px'
  },
  loader:{
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
      console.log("logOut")
    // this.props.LogOutAction();
  }
  render() {
    // const {
    //     auth,
    //     Loaders,
    // } = this.props;
    return (

      <div >
        <div>
          {(Loaders === true) ? (
            < EventLoader/>
          ) : (
              <div style={styles.loader}></div>
            )}
        </div>
        <mat.AppBar
          style={styles.appBar}
          title={<span className="colors">Inventory Store</span>}
          iconElementLeft={
            <span>
              {(auth === true) ? (
                <DrawerUndockedExample />
              ) : (
                  <span></span>
                )}
            </span>
          }
          iconElementRight={
            <div style={styles.headerButton}>
              {(auth === false) ? (
                <span>
                  <Link to='/LogIn'>
                    <mat.FlatButton style={styles.button} label="Log In" />
                  </Link>
                </span>
              ) : (
                  <div>
                    <mat.FlatButton style={styles.button}
                      onClick={this.logOut} label="Log Out"
                    />
                  </div>

                )}
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