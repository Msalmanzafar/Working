
import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
// import user from '../Images/icon officer_12_1.png';
import { FormErrors } from './FormErrors';
import FaPencil from 'react-icons/lib/fa/pencil'
import './Form.css';

import { UserLogInAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';


// const styles = {
//     login: {
//         marginTop: 50,

//     }
// }


class LogIn extends Component {
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
        this.logIn = this.logIn.bind(this);
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
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid (example@gmail.com)';
                break;
            case 'password':
                passwordValid = value.length >= 8;
                fieldValidationErrors.Password = passwordValid ? '' : ' is too short';
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
    logIn() {
        let email = this.state.email;
        let password = this.state.password;

        let LogInUser = {
            email: email,
            password: password
        }
        // console.log('User Login', LogInUser);
        this.props.UserLogInAction(LogInUser);
    }
    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    render() {
        const {
            ErrorMessage,
            SnackBars,
            Loading,
        } = this.props;
        return (
            <div>
                <div className='container-flux img-responsive' id='imgBox'>
                    <div
                        id="LoginBox"
                        className="container col-md-8 col-md-offset-2 col-xs-12"
                    >
                        <mat.Card
                            zDepth={3}
                            style={{ position: 'relative', marginTop: 80, borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.9)' }}
                            className="text-left"
                        >
                            <mat.AppBar
                                titleStyle={{ fontSize: 28, color: 'black', fontWeight: 500, textAlign: 'left' }}
                                iconElementRight={<FaPencil style={{ fontSize: 34, marginTop: 5, marginRight: 10 }} />}
                                showMenuIconButton={false}
                                title='Log In'
                                style={{ borderRadius: '5px 5px 0 0', backgroundColor: 'rgba(255,255,255,0.5)' }}
                            />
                            <mat.CardText>
                                <div className="text-center">
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
                                    /><br />
                                    <mat.TextField
                                        floatingLabelText="Password"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="password"
                                        name="password"
                                        value={this.state.password}
                                        onChange={this.handleUserInput}
                                    /><br />
                                    <div className="panel panel-default text-left" style={{ marginLeft: 20, fontSize: 18, color: 'red', border: 'none' }}>
                                        <FormErrors formErrors={this.state.formErrors} />
                                    </div>
                                    {(ErrorMessage) ? (
                                        <div style={{ marginLeft: 20, marginRight: 20 }}>
                                            <p className="alert alert-danger">{ErrorMessage}</p>
                                        </div>
                                    ) : (
                                            <span></span>
                                        )}
                                    <div className='text-left'>
                                        {(!Loading) ? (
                                            <mat.RaisedButton
                                                label="Sign Up"
                                                secondary={true}
                                                onClick={this.logIn}
                                                type="button"
                                                disabled={!this.state.formValid}
                                                style={{ marginTop: 10, marginLeft: 20, }}
                                            />
                                        ) : (
                                                <mat.CircularProgress
                                                    style={{ marginTop: 10, marginLeft: 20, }}
                                                />
                                            )}

                                    </div>

                                </div>
                            </mat.CardText>
                        </mat.Card>
                    </div>
                </div>
                <div>
                    <mat.Snackbar
                        open={SnackBars}
                        message="Thanks For Login "
                        bodyStyle={{ backgroundColor: '#b71c1c', color: '#ffffff' }}
                    />
                </div>
                <br />
                <br />
                <div style={{ position: 'relative', marginTop: -60 }}>
                    <Subscribe />
                </div>

                <FooterOfCollection />
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        // auth: state.AuthReducer,
        SnackBars: state.AuthReducer.Snack,
        ErrorMessage: state.AuthReducer.ErrorMess,
        Loading: state.AuthReducer.loader
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        UserLogInAction: (LogInUser) => {
            dispatch(UserLogInAction(LogInUser));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(LogIn);