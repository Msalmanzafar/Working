import React, { Component } from 'react';
import * as mat from 'material-ui'
import FaUser from 'react-icons/lib/fa/user';
import { connect } from 'react-redux';
import { CustomerDetails } from '../../Actions/AdminAction'
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';

const style = {
    // height: 'auto',
    width: '100%',
    // margin: 30,
    textAlign: 'left',
    display: 'inline-block',
    position: 'relative',
    borderRadius: 4

};
const styles = {
    aboutCaontainer: {
        marginTop: 30,
        position: 'relative',
    },
    heading: {
        // margin: '30px 0px 0px 30px',
        color: '#f44336',
        fontWeight: 'bold',
        fontFamily: 'helvetica',
        textShadow: '0px 1px 2px gray'
    },
    map: {
        fontSize: 22,
        color: 'red'
    },
}
class AdminPanel extends Component {
    state = {
        open: false,
    };

    Veiw = (IdKeys) => {
        // console.log(IdKeys)
        this.props.CustomerDetails(IdKeys);
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <mat.FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
        ];
        const {
            CustomerData,
            Loader,
            View
        } = this.props;
        
        let CustomerLists = Object.keys(CustomerData).map((key, index) => {
            let val = CustomerData[key];
            let IdKeys = key;
            // console.log("val",val);
            return (
                <mat.ListItem
                    key={index}
                    leftAvatar={<mat.Avatar icon={<FaUser />} backgroundColor='#8ed1fc' />}
                    rightIconButton={<mat.FlatButton onClick={this.Veiw.bind(this, IdKeys)} label='View' />}
                    primaryText={val.fullName}
                    secondaryText={val.email}
                    hoverColor={'#ff6900'}
                />
            )
        })
        let ViewData = Object.keys(View).map((key, index) => {
            let val = View[key];
            return (
                <mat.List key={index}>
                    <mat.ListItem primaryText={<p><b>Name:</b> {val.fullName}</p>}/>
                    <mat.ListItem primaryText={<p><b>City Name:</b> {val.cityName}</p>}/>
                    <mat.ListItem primaryText={<p><b>Shop Name:</b> {val.shopName}</p>}/>
                    <mat.ListItem primaryText={<p><b>Email:</b> {val.email}</p>}/>
                    <mat.ListItem primaryText={<p><b>Address:</b> {val.address}</p>}/>
                    <mat.ListItem primaryText={<p><b>Cell Number:</b> {val.cellNumber}</p>}/>
                </mat.List>
            )
        })
        return (
            <div>
                <div className="container" style={styles.ContactContainer}>
                    <mat.Card style={style} zDepth={2} >
                        <mat.AppBar
                            style={{ backgroundColor: '#9f0500' }}
                            titleStyle={{
                                textShadow: '0px 1px 2px black',
                                fontWeight: 'bold',
                                textAlign: 'left'
                            }}
                            title='Customers Detail'
                            showMenuIconButton={false}

                        />
                        <div className='col-md-8 col-md-offset-2 col-xs-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    {(Loader === true) ? (
                                        <div className='text-center'>
                                            <br />
                                            <br />
                                            <mat.CircularProgress />
                                        </div>
                                    ) : (
                                            <mat.List>
                                                <mat.Subheader>Customer List</mat.Subheader>
                                                {CustomerLists}
                                            </mat.List>
                                        )}

                                </div>
                            </div>
                        </div>
                    </mat.Card>
                    <div>
                        <mat.Dialog
                            title="Details"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                                        {ViewData}
                        </mat.Dialog>
                    </div>
                </div>
                <br />
                <br />

                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        CustomerData: state.AdminReducers.AdminData,
        Loader: state.AdminReducers.loader,
        View: state.AdminReducers.AdminView,
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        CustomerDetails: (IdKeys) => {
            dispatch(CustomerDetails(IdKeys));
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminPanel);
// export default AdminPanel;