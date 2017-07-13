import React from 'react';
// import { connect } from 'react-redux';
// import { browserHistory } from 'react-router';
import { List, ListItem } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MdMenu from 'react-icons/lib/md/menu';
import MdAddShoppingCart from 'react-icons/lib/md/add-shopping-cart';
import MdBorderColor from 'react-icons/lib/md/border-color';
import MdSettings from 'react-icons/lib/md/settings';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
// import { AvailibaleActions, LoaderAction } from '../../Actions/newStoreAction'
// import { SalesProductsAction, SaledListActions } from '../../Actions/SalesActions'



// const style = {
//     
// }
const styles = {
    close: {
        float: 'right',
        marginRight: '15px'
    },
    smallIcon: {
        width: 36,
        height: 36,
        color: '#f8fdfa'
    },
    small: {
        width: 40,
        height: 40,
        padding: 5,
    },
    email: {
        fontSize: '18px'
    },
    menuItems: {
        width: 36,
        height: 36,
        color: '#525252'
    },
    menu: {
        width: 40,
        height: 36,
        // padding: 5,
    }
};

class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.CreateStore = this.CreateStore.bind(this);
        this.AvailibaleStores = this.AvailibaleStores.bind(this);
        this.SaleProduct = this.SaleProduct.bind(this);
        this.SalesDetails = this.SalesDetails.bind(this);
        this.state = { open: false };
    }
    SalesDetails() {
        console.log("Store Create");

        // this.props.LoaderAction();
        // this.props.SaledListActions();
        // browserHistory.push('/salesdetails');
        // this.setState({ open: false });
    }
    SaleProduct() {
        console.log("Store Create");

        // this.props.SalesProductsAction();
        // browserHistory.push('/saleproduct');
        // this.setState({ open: false });
    }
    AvailibaleStores() {
        console.log("Store Create");
        // this.props.LoaderAction();
        // this.props.AvailibaleActions();
        // browserHistory.push('/availstores');
        // this.setState({ open: false });
    }
    CreateStore() {
        console.log("Store Create");
        // browserHistory.push('/newstore')
        // this.setState({ open: false });
    }

    handleToggle = () => {
        console.log('working');
        this.setState({ open: !this.state.open });
    }

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <div>
                <IconButton
                    iconStyle={styles.smallIcon}
                    style={styles.small}
                >
                    <MdMenu onClick={this.handleToggle} />
                </IconButton>
                <Drawer
                    docked={false}
                    width={250}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <AppBar iconElementLeft={<span></span>} title={<span style={styles.email}>email</span>} />
                    <div>
                        <MenuItem
                            style={{  display: 'inline' }}
                            onClick={this.CreateStore}
                        >
                            <List>
                                <ListItem primaryText="Card" leftIcon={<MdAddShoppingCart />} />
                            </List>
                        </MenuItem>
                        <MenuItem
                            style={{  display: 'inline' }}
                            onClick={this.AvailibaleStores}
                        >
                            <List>
                                <ListItem primaryText="Order" leftIcon={<MdBorderColor />} />
                            </List>
                        </MenuItem>
                        <MenuItem 
                            onClick={this.SaleProduct}
                            style={{  display: 'inline' }}
                        >
                            <List>
                                <ListItem primaryText="Setting" leftIcon={<MdSettings />} />
                            </List>
                        </MenuItem>
                        <MenuItem 
                            style={{  display: 'inline' }}
                            onClick={this.SalesDetails}
                        >
                            <List>
                                <ListItem primaryText="About" leftIcon={<MdInfoOutline />} />
                            </List>
                        </MenuItem>
                    </div>

                    <RaisedButton
                        label="Close"
                        onClick={this.handleClose}
                        style={styles.close}
                    />
                </Drawer>
            </div>
        );
    }
}

// const mapStateToProps = (state) => {
//   return {
//     auth: state.AuthReducer.authSignIn
//   };
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     LoaderAction: () => {
//       dispatch(LoaderAction());
//     },
//     AvailibaleActions: () => {
//       dispatch(AvailibaleActions());
//     },
//     SalesProductsAction: () => {
//       dispatch(SalesProductsAction());
//     },
//     SaledListActions: () => {
//       dispatch(SaledListActions());
//     }
//   };
// }
// export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample);

export default DrawerUndockedExample;