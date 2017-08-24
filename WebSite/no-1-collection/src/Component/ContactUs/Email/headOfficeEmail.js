import React, { Component } from 'react';
import * as mat from 'material-ui';
import { FormErrors } from './FormErrors';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import axios from 'axios';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.SendFeedBack = this.SendFeedBack.bind(this);
        this.state = {
            email: '',
            message: '',
            formErrors: { email: '', message: '' },
            emailValid: false,
            messageValid: false,
        }
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
        let messageValid = this.state.messageValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.Email = emailValid ? '' : ' is invalid (example@gmail.com)';
                break;
            case 'message':
                messageValid = value.length >= 30;
                fieldValidationErrors.Message = messageValid ? '' : ' is too short';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
            messageValid: messageValid
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.messageValid });
    }
    SendFeedBack() {
        // console.log('SendFeedBack');
        var email = this.refs.email.getValue();
        var message = this.refs.message.getValue();

        let EmailSender = {
            sender_email: email,
            message: message
        };

        console.log('email', EmailSender);
        axios.get('https://sheltered-ridge-18341.herokuapp.com/mailsend', {
            headers: {
                email: email,
                message: message
            }
        })
            .then(function (response) {
                console.log(response, 'success');
            })
            .catch(function (err) {
                console.log(err, 'err');
            })
    }
    render() {

        return (
            <div>
                <div>
                    <mat.Card style={{ boxShadow: 'none' }}>
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
                            hintText='Enter your message'
                            floatingLabelText="Message"
                            fullWidth={true}
                            style={{ width: '97%' }}
                            type="text"
                            required
                            name="message"
                            value={this.state.message}
                            onChange={this.handleUserInput}
                        /><br />
                        <div className="panel panel-default text-left" style={{ marginLeft: 20, fontSize: 18, color: 'red', border: 'none' }}>
                            <FormErrors formErrors={this.state.formErrors} />
                        </div>
                        <mat.RaisedButton
                            label="Send"
                            secondary={true}
                            style={{ margin: 10 }}
                            icon={<FaEnvelope />}
                            onClick={this.SendFeedBack}
                            disabled={!this.state.formValid}
                        />
                    </mat.Card>
                </div>
            </div>
        );
    }
};

export default EmailForm;