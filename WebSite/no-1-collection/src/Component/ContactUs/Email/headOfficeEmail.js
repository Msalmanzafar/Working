import React, { Component } from 'react';
import * as mat from 'material-ui';
// import ErrorDisplay from './Error';
import FaEnvelope from 'react-icons/lib/fa/envelope';

class EmailForm extends Component {
    constructor(props) {
        super(props);
        this.SendFeedBack = this.SendFeedBack.bind(this);
        
    }
    SendFeedBack() {
        // console.log('SendFeedBack');
        var email = this.refs.email.getValue();
        var message = this.refs.message.getValue();

        if (!email || !message) {
            alert("Please Write your Email and message");
        } else {
            let feedback = {
                emai: email,
                message: message
            }
            console.log('SendFeedBack', feedback);
        }
    }
    render() {
        
        return (
            <div>
                <div>
                    <mat.Card style={{ boxShadow: 'none' }}>
                        <mat.TextField
                            hintText="Enter your email"
                            fullWidth={true}
                            floatingLabelText="Email"
                            type="email"
                            ref='email'
                        />
                        <mat.TextField
                            hintText='Enter your message'
                            fullWidth={true}
                            floatingLabelText='Message'
                            type='text'
                            ref='message'
                        />
                        <mat.RaisedButton
                            label="Send"
                            secondary={true}
                            style={{ margin: 10 }}
                            icon={<FaEnvelope />}
                            onClick={this.SendFeedBack}
                        />
                    </mat.Card>
                </div>
            </div>
        );
    }
};

export default EmailForm;