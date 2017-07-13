import React, { Component } from 'react';
import * as mat from 'material-ui';

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
                    <mat.Paper transitionEnabled={true} zDepth={2} style={{position: 'relative'}}>
                        <mat.AppBar
                            titleStyle={{ textShadow: '1px 2px 2px black' }}
                            showMenuIconButton={false}
                            title={<h3 className=" text-center">Sign Up</h3>}
                        />
                        <mat.CardText>
                            <mat.TextField
                                hintText="Enter your first name"
                                floatingLabelText="First Name"
                                fullWidth={true}
                            /><br />
                            <mat.TextField
                                hintText="Enter your last name"
                                floatingLabelText="Last Name"
                                fullWidth={true}
                            /><br />
                        </mat.CardText>
                    </mat.Paper>

                </div>
            </div>
        );
    }
};


export default SignUp;