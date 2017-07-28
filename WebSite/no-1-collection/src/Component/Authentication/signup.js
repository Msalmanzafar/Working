import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
import user from '../Images/icon officer_12_1.png';
import { FormErrors } from './FormErrors';
import './Form.css';

const styles = {
    signup: {
        marginTop: 50,

    }
}


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            formErrors: { email: '', password: '' },
            emailValid: false,
            passwordValid: false,
            formValid: false
        }
        this.SignUp = this.SignUp.bind(this);
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            case 'password':
                passwordValid = value.length >= 6;
                fieldValidationErrors.password = passwordValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
    }
    SignUp() {
        let email = this.state.email;
        let password = this.state.password;
        let SignUpNewUser = {
            email: email,
            password: password
        }
        console.log('new user', SignUpNewUser);

    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }

    // constructor(props) {
    //     super(props);
    //     this.SignUpUser = this.SignUpUser.bind(this);

    // }
    // SignUpUser() {
    //     var firstName = this.refs.fName.getValue();
    //     var lastName = this.refs.lName.getValue();
    //     var contactNumber = this.refs.number.getValue();
    //     var email = this.refs.email.getValue();
    //     var password = this.refs.password.getValue();

    //     let SignUpNewUser = {
    //         fName: firstName,
    //         lName: lastName,
    //         number: contactNumber,
    //         email: email,
    //         password: password
    //     }
    //     console.log('-----------', SignUpNewUser);
    // }
    render() {
        return (
            <div>
                <div className="container " style={styles.signup}>
                    <mat.Card
                        zDepth={3}
                        style={{ position: 'relative', borderRadius: 5 }}
                        className="text-left"
                    >
                        <mat.AppBar
                            titleStyle={{ textShadow: '0px 2px 3px black', textAlign: 'center' }}
                            showMenuIconButton={false}
                            title='Sign Up'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#b3b3b3' }}
                        />
                        <mat.CardText>
                            <div className='text-center'>
                                <img src={user} alt='user' style={{ width: '18%', height: 'auto' }} />
                            </div>
                            <div className="text-center">
                                <span className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                                    <mat.TextField
                                        hintText="Enter your registered email address"
                                        floatingLabelText="Email"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="email"
                                        required
                                        name="email"
                                        value={this.state.email}
                                        onChange={this.handleUserInput}
                                    />
                                </span><br/>
                                <span className={`form-group ${this.errorClass(this.state.formErrors.password)}`}>
                                    <mat.TextField
                                        floatingLabelText="Password"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleUserInput} 
                                    />
                                </span><br/>
                                <div className="panel panel-default " style={{ fontSize: 22, color: 'red', border: 'none' }}>
                                    <FormErrors formErrors={this.state.formErrors} />
                                </div>
                                <button onClick={this.SignUp} type="button" className="btn btn-primary" disabled={!this.state.formValid}>Sign up</button>


                            </div>
                        </mat.CardText>
                    </mat.Card>
                </div>
                {/* <div className="container " style={styles.signup}>
                    <mat.Card
                        zDepth={3}
                        style={{ position: 'relative', borderRadius: 5 }}
                        className="text-left"
                    >
                        <mat.AppBar
                            titleStyle={{ textShadow: '0px 2px 3px black', textAlign: 'center' }}
                            showMenuIconButton={false}
                            title='Sign Up'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#b3b3b3' }}
                        />
                        <mat.CardText>
                            <div className='text-center'>
                                <img src={user} alt='user' style={{ width: '18%', height: 'auto' }} />
                            </div>
                            <div className="text-center">
                                <mat.TextField
                                    ref='fName'
                                    hintText="Enter your first name"
                                    floatingLabelText="First Name"
                                    fullWidth={true}
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    ref='lName'
                                    hintText="Enter your last name"
                                    floatingLabelText="Last Name"
                                    fullWidth={true}
                                    style={{ width: '97%' }}
                                /><br />
                                <mat.TextField
                                    ref='number'
                                    hintText="0321-1234567"
                                    floatingLabelText="Mobile Number"
                                    fullWidth={true}
                                    maxLength='12'
                                    style={{ width: '97%' }}
                                /><br />

                                <mat.TextField
                                    ref='email'
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
                                    ref='password'
                                /><br />
                            </div>
                            <mat.RaisedButton
                                label="Sign Up"
                                secondary={true}
                                style={{ marginTop: 10, marginLeft: 20 }}
                                onClick={this.SignUpUser}
                            />
                        </mat.CardText>
                    </mat.Card>

                </div> */}
                <br />
                <br />
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
};


export default SignUp;