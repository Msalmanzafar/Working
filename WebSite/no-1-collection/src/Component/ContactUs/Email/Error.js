import React, { Component } from 'react';
import * as mat from 'material-ui';



class ErrorDisplay extends Component {
    constructor(props){
        super(props);
        this.setState({ open: true });
    }
    state={
        open: false
    }
    handleClose(){
        this.setState({ open: false });
    }
    render() {
        const actions = [
            <mat.FlatButton
                label="Ok"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div>
                <mat.Dialog
                    title="Error"
                    actions={actions}
                    modal={false}
                    open={this.props.open}
                    onRequestClose={this.handleClose}
                >

                </mat.Dialog>
            </div>
        );
    }
};

export default ErrorDisplay;