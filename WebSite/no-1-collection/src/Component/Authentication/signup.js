import React, { Component } from 'react';
import * as mat from 'material-ui';
import NumberFormat from 'react-number-format';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
// import user from '../Images/icon officer_12_1.png';
import { FormErrors } from './FormErrors';
import './Form.css';
import Back from '../Images/resize-img.jpg'
import FaPencil from 'react-icons/lib/fa/pencil'

import { CreateNewUserAction } from '../../Actions/AuthActions';
import { connect } from 'react-redux';



const styles = {
    signup: {
        marginTop: '-53%',
        // position: 'relative',
        height: 'auto',
        width: '62%',
        zIndex: 2,
        // textAlign: 'left',
        // display: 'inline-block',
    }
}


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            cityName: '',
            address: '',
            shopName: '',
            cellNumber: '',
            email: '',
            password: '',
            formErrors: { ShopName: '', fullName: '', cityName: '', address: '', cellNumber: '', email: '', password: '' },
            fullNameValid: false,
            cityNameValid: false,
            addressValid: false,
            ShopNameValid: false,
            cellNumberValid: false,
            emailValid: false,
            passwordValid: false,
            formValid: false,
            value: 1,
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
        let fullNameValid = this.state.fullNameValid;
        let cityNameValid = this.state.cityNameValid;
        let addressValid = this.state.addressValid;
        let ShopNameValid = this.state.ShopNameValid;
        let cellNumberValid = this.state.cellNumberValid;
        let emailValid = this.state.emailValid;
        let passwordValid = this.state.passwordValid;

        switch (fieldName) {
            case 'fullName':
                fullNameValid = value;
                fieldValidationErrors.Full_Name = fullNameValid ? '' : ' is required';
                break;
            case 'cityName':
                cityNameValid = value;
                fieldValidationErrors.City_Name = cityNameValid ? '' : ' is required';
                break;
            case 'address':
                addressValid = value;
                fieldValidationErrors.Address = addressValid ? '' : ' is required';
                break;
            case 'shopName':
                ShopNameValid = value;
                fieldValidationErrors.Shop_Name = ShopNameValid ? '' : ' is required';
                break;
            case 'cellNumber':
                cellNumberValid = value.length >= 11;
                fieldValidationErrors.Cell_Phone_Number = cellNumberValid ? '' : ' is required';
                break;
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
            fullNameValid: fullNameValid,
            cityNameValid: cityNameValid,
            addressValid: addressValid,
            ShopNameValid: ShopNameValid,
            cellNumberValid: cellNumberValid,
            emailValid: emailValid,
            passwordValid: passwordValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({
            formValid: this.state.emailValid && this.state.ShopNameValid && this.state.passwordValid && this.state.addressValid && this.state.cityNameValid && this.state.fullNameValid && this.state.cellNumberValid
        });
    }
    SignUp() {
        let fullName = this.state.fullName;
        let cityName = this.state.cityName;
        let address = this.state.address;
        let shopName = this.state.shopName;
        let cellNumber = this.state.cellNumber;
        let email = this.state.email;
        let password = this.state.password;

        let newUserOption = {
            fullName: fullName,
            cityName: cityName,
            address: address,
            shopName: shopName,
            cellNumber: cellNumber,
            email: email,
            password: password
        };

        // console.log('new user', newUserOption);
        this.props.CreateNewUserAction(newUserOption);
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
                <div className='container-flux' style={{ marginTop: -20, position: 'relative', opacity: 0.7 }}>
                    <img src={Back} alt="background" style={{ width: '100%', }} />
                </div>
                <div className="container" id='signUpBox' style={styles.signup}>
                    <mat.Card
                        className='text-center'
                        zDepth={3}
                        style={{ position: 'relative', borderRadius: 4, backgroundColor: 'rgba(255,255,255,0.5)' }}
                    >
                        <mat.AppBar
                            titleStyle={{ fontSize: 28, color: 'black', fontWeight: 500, textAlign: 'left' }}
                            showMenuIconButton={false}
                            iconElementRight={<FaPencil style={{ fontSize: 34, marginTop: 5, marginRight: 10 }} />}
                            title='Sign Up'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: 'rgba(255,255,255,0.2)' }}
                        />
                        <article>
                            <mat.CardText>
                                {/* <div className='text-center'>
                                <img src={user} alt='user' style={{ width: '16%', height: 'auto' }} />
                            </div> */}
                                <div className="text-center">
                                    <mat.TextField
                                        hintText="Enter your full name"
                                        floatingLabelText="Full Name"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="text"
                                        required
                                        name="fullName"
                                        value={this.state.fullName}
                                        onChange={this.handleUserInput}
                                    /><br />
                                    <mat.TextField
                                        hintText="Enter your city"
                                        floatingLabelText="City"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="text"
                                        required
                                        name="cityName"
                                        value={this.state.cityName}
                                        onChange={this.handleUserInput}
                                    /><br />
                                    <mat.TextField
                                        hintText="Enter your address"
                                        floatingLabelText="Address"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="text"
                                        required
                                        name="address"
                                        value={this.state.address}
                                        onChange={this.handleUserInput}
                                    /><br />
                                    <mat.TextField
                                        hintText="Enter your shop name"
                                        floatingLabelText="Shop Name"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        type="text"
                                        required
                                        name="shopName"
                                        value={this.state.shopName}
                                        onChange={this.handleUserInput}
                                    /><br />
                                    <NumberFormat
                                        format="###########"
                                        customInput={mat.TextField}
                                        floatingLabelText="Cell Number"
                                        fullWidth={true}
                                        style={{ width: '97%' }}
                                        className='no-spinner'
                                        required
                                        name="cellNumber"
                                        value={this.state.cellNumber}
                                        onChange={this.handleUserInput}
                                    /><br />
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
                                        <div>
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
                                                onClick={this.SignUp}
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
                        </article>
                    </mat.Card>
                    <div>
                        <mat.Snackbar
                            open={SnackBars}
                            message="Your Account is Created"
                            bodyStyle={{ backgroundColor: '#b71c1c', color: '#ffffff' }}
                        />
                    </div>
                </div>

                <br />
                <br />
                <div style={{ position: 'relative' }}>
                    <Subscribe />
                </div>
                <FooterOfCollection />
            </div>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        // auth: state.AuthReducer.loader,
        SnackBars: state.AuthReducer.Snack,
        ErrorMessage: state.AuthReducer.ErrorMess,
        Loading: state.AuthReducer.loader
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        CreateNewUserAction: (newUserOption) => {
            dispatch(CreateNewUserAction(newUserOption));
        }
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// export default SignUp;