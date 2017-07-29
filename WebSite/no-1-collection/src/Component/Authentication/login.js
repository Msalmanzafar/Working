import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
// import FaUser from 'react-icons/lib/fa/user';
import user from '../Images/icon officer_12_1.png';


const styles = {
    login: {
        marginTop: 50
    }
}


class LogIn extends Component {
    render() {
        return (
            <div>
                <div className="container " style={styles.login}>
                    <mat.Card
                        className="text-left"
                        zDepth={3}
                        style={{ position: 'relative', borderRadius: 5 }}
                    >
                        <mat.AppBar
                            titleStyle={{ fontSize: 28, textShadow: '2px 2px 5px black', fontWeight: 500, textAlign: 'center' }}
                            showMenuIconButton={false}
                            title='Log In'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#b3b3b3' }}
                        />
                        <mat.CardText>
                            {/* <div className='text-center'>
                                <FaUser style={{fontSize: 50}}/>
                            </div> */}
                            <div className='text-center'>
                                <img src={user} alt='user' style={{ width: '16%', height: 'auto' }} />
                            </div>
                            <div className="text-center">
                                <mat.TextField
                                    hintText="Enter your register email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    hintText="Enter your password"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                    type="password"
                                    style={{ width: '97%' }}
                                /><br />
                            </div>
                            <mat.RaisedButton
                                label="Sign Up"
                                secondary={true}
                                style={{ marginTop: 10, marginLeft: 10 }}
                            />
                        </mat.CardText>
                    </mat.Card>

                </div>
                <br />
                <br />
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
};


export default LogIn;