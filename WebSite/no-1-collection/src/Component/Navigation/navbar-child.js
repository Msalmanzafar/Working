import React from 'react';
import { browserHistory } from 'react-router';

import theFebric from '../Images/The-Fabric-Store.png';
import Trendz from '../Images/Trendz.png';
import vintage from '../Images/Vintage.png';

import { List, ListItem } from 'material-ui/List';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MdMenu from 'react-icons/lib/md/menu';
import Avatar from 'material-ui/Avatar';
import FaImage from 'react-icons/lib/fa/image';
import MdInfoOutline from 'react-icons/lib/md/info-outline';
import MdHome from 'react-icons/lib/md/home';
import MdContactMail from 'react-icons/lib/md/contact-mail';
import { connect } from 'react-redux'



const styles = {
    close: {
        float: 'right',
        marginRight: '15px'
    },
    smallIcon: {
        width: 36,
        height: 36,
        color: '#f8fdfa',
        marginTop: 5
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
    }
};

class DrawerUndockedExample extends React.Component {

    constructor(props) {
        super(props);
        this.home = this.home.bind(this);
        this.Contact_Us = this.Contact_Us.bind(this);
        this.About = this.About.bind(this);
        this.Gallery = this.Gallery.bind(this);

        this.state = { open: false };
    }
    home() {
        browserHistory.push('/home');
        this.setState({ open: false });
    }
    Gallery() {
        browserHistory.push('/pgallery');
        this.setState({ open: false });
    }
    Contact_Us() {
        browserHistory.push('/contactus');
        this.setState({ open: false });
    }
    About() {
        browserHistory.push('/about');
        this.setState({ open: false });
    }

    handleToggle = () => {
        // console.log('working');
        this.setState({ open: !this.state.open });
    }

    handleClose = () => this.setState({ open: false });

    render() {
        const {
            User
        } = this.props;
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
                    <AppBar
                        iconElementLeft={
                            <span>
                                <Avatar size={48}/>
                            </span>
                        }
                        title={
                            <span>
                                {(!User) ? (
                                    <span></span>
                                ) : (
                                        <span style={{ fontSize: 14 }}>{User.email}</span>
                                    )}
                            </span>
                        }
                    />
                    <div>
                        <MenuItem
                            style={{ display: 'inline' }}
                            onClick={this.CreateStore}
                        >
                            <List>
                                <ListItem
                                    style={{ textAlign: 'left' }}
                                    onClick={this.home}
                                    primaryText="Home"
                                    leftIcon={<MdHome />} />

                            </List>
                        </MenuItem>
                         <MenuItem
                            style={{ display: 'inline' }}
                            onClick={this.CreateStore}
                        >
                            <List>
                                <ListItem
                                    onClick={this.Gallery}
                                    style={{ textAlign: 'left' }}
                                    primaryText="Products Album"
                                    leftIcon={<FaImage />} />
                            </List>
                        </MenuItem> 
                        <MenuItem
                            style={{ display: 'inline' }}
                            onClick={this.SalesDetails}
                        >
                            <List>
                                <ListItem
                                    style={{ textAlign: 'left' }}
                                    primaryText="Contact Us"
                                    leftIcon={<MdContactMail />}
                                    onClick={this.Contact_Us}
                                />
                            </List>
                        </MenuItem>
                        <MenuItem
                            style={{ display: 'inline' }}
                            onClick={this.SalesDetails}
                        >
                            <List>
                                <ListItem
                                    style={{ textAlign: 'left' }}
                                    primaryText="About Us"
                                    leftIcon={<MdInfoOutline />}
                                    onClick={this.About}
                                />
                            </List>
                        </MenuItem>
                    </div>

                    <RaisedButton
                        label="Close"
                        onClick={this.handleClose}
                        style={styles.close}
                    />

                    <div className='col-xs-12 col-md-12' style={{ marginTop: 10 }}>
                        <span>
                            <img src={theFebric} alt="theFebric" style={{ width: 65, height: 28, margin: 3 }} />
                            <img src={Trendz} alt="Trendz" style={{ width: 60, height: 28, margin: 3 }} />
                            <img src={vintage} alt="vintage" style={{ width: 65, height: 28, margin: 3 }} />

                        </span>
                    </div>
                </Drawer>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        User: state.AuthReducer.authSignIn,
        auth: state.AuthReducer.authLogOut
    };
}

export default connect(mapStateToProps)(DrawerUndockedExample);

// export default DrawerUndockedExample;