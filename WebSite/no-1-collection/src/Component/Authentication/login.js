import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';




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
                        transitionEnabled={true}
                        zDepth={3}
                        style={{ position: 'relative', borderRadius: 5 }}
                    >
                        <mat.AppBar
                            titleStyle={{ textShadow: '0px 2px 3px black', textAlign: 'center' }}
                            showMenuIconButton={false}
                            title='Log In'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#808080' }}
                        />
                        <mat.CardText>
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
                <br/>
                <br/>
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
};


export default LogIn;