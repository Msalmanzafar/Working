import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';




const styles = {
    signup: {
        marginTop: 50
    }
}


class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="container " style={styles.signup}>
                    <mat.Card
                        transitionEnabled={true}
                        zDepth={3}
                        style={{ position: 'relative' ,borderRadius: 5}}
                    >
                        <mat.AppBar
                            titleStyle={{textShadow: '0px 2px 3px black',textAlign: 'center'}}
                            showMenuIconButton={false}
                            title='Sign Up'
                            style={{borderRadius: '5px 5px 0 0',backgroundColor: '#808080'}}
                        />
                        <mat.CardText>
                            <div className="text-center">
                                <mat.TextField
                                    hintText="Enter your first name"
                                    floatingLabelText="First Name"
                                    fullWidth={true}
                                    style={{ width: '97%'}}
                                /><br/>
                                <mat.TextField
                                    hintText="Enter your last name"
                                    floatingLabelText="Last Name"
                                    fullWidth={true}
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    hintText="0321-1234567"
                                    floatingLabelText="Mobile Number"
                                    fullWidth={true}
                                    maxLength='12'
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    hintText="Enter your register email"
                                    floatingLabelText="Email"
                                    fullWidth={true}
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    hintText="Enter password maximum 2 chracters with 6 numbers"
                                    floatingLabelText="Password"
                                    fullWidth={true}
                                    type="password"
                                    maxLength='8'
                                    style={{ width: '97%' }}
                                /><br />
                            </div>
                            <mat.RaisedButton
                                label="Sign Up"
                                secondary={true}
                                style={{ marginTop: 10, marginLeft: 20 }}
                            />
                        </mat.CardText>
                    </mat.Card>

                </div>
                <br/>
                <br/>
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
};


export default SignUp;