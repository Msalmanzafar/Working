import React, { Component } from 'react';
import * as mat from 'material-ui';
// import theFebric from '../Images/The-Fabric-Store.png';
// import Trendz from '../Images/Trendz.png';
// import vintage from '../Images/Vintage.png';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import { Link } from 'react-router';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaMapMarker from 'react-icons/lib/fa/map-marker';
// import FaMobile from 'react-icons/lib/fa/mobile';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
import EmailForm from './Email/headOfficeEmail'



const style = {
    // height: 'auto',
    // width: '100%',
    // margin: 30,
    textAlign: 'left',
    display: 'inline-block',
    position: 'relative',
    borderRadius: 4

};
const styles = {
    ContactContainer: {
        marginTop: 30,
        position: 'relative'
    },
    titles: {
        // fontSize: 24,
        fontWeight: 'bold',
        // margin: 25,
        textShadow: '1px 1px 2px black',
        // color: 'black'
    },
    thefebric: {
        margin: 27,
        width: 220,
        height: 100,
        borderRadius: 4,
        boxShadow: '0px 2px 4px gray'
    },
    map: {
        fontSize: 22,
        color: 'red'
    },
    gmail: {
        color: '#862d2d'
    },
    facebook: {
        color: '#01579b'
    },
    linkedin: {
        color: '#0288d1'
    },
    heading: {
        margin: '30px 0px 10px 30px',
        color: '#f44336',
        fontWeight: 'bold',
        textDecoration: 'underline',
        fontStyle: 'Helvetica, sans-serif',
    },
    text: {
        margin: 30,
        fontSize: 16,
        textAlign: 'justify',
        color: 'black'
    },
    headingSocial: {
        margin: '30px 0px 10px 30px',
        color: '#f44336',
        // fontWeight: 'bold',
        textDecoration: 'underline'
    },
    icons: {
        fontSize: 28,
        marginTop: 8,
        // color: '',
    }
}
class ContactUs extends Component {
    state = {
        open: false,
    };
    constructor(props) {
        super(props);
        this.Email = this.Email.bind(this);
    }
    Email() {
        // console.log('emailllllll');
        this.setState({ open: true });
    }
    
    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const actions = [
            <mat.FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        return (
            <div >
                <div className="container" style={styles.ContactContainer}>
                    <mat.Card style={style} zDepth={2} >
                        <mat.AppBar
                            style={{ backgroundColor: '#b3b3b3' }}
                            title={
                                <span style={styles.titles}>Contact Us</span>
                            }
                            showMenuIconButton={false}

                        />
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    <blockquote style={{ border: 'none' }}>
                                        <h3 style={styles.heading}>Head Office</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20 }}
                                                    primaryText="188/B 2nd Floor, Block 2, PECHS, Main Nursery Furniture Market behind Blue Ribbon Bakery, Karachi."
                                                    leftIcon={<FaMapMarker style={styles.map} />}
                                                />
                                            </mat.List>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className='col-md-12'>
                                    <blockquote style={{ border: 'none' }}>
                                        <div className='col-md-6'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20 }}
                                                    primaryText="021-34541225 / 021-34559395"
                                                    leftIcon={<FaPhoneSquare style={styles.map} />}
                                                />
                                            </mat.List>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className='col-md-12'>
                                    <blockquote style={{ border: 'none' }}>
                                        <div className='col-md-6'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20 }}
                                                    primaryText="info@no1collection.com.pk"
                                                    leftIcon={<FaEnvelope style={styles.map} />}
                                                />
                                            </mat.List>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12' >
                            <blockquote style={{ border: 'none' }}>
                                <h3 style={styles.heading}>Get Social With Us</h3>
                                <div className="row">
                                    <div className='col-md-5'>
                                        <mat.List>
                                            <mat.ListItem
                                                style={{ marginLeft: 30 }}
                                                primaryText="Send Email"
                                                onTouchTap={this.Email}
                                                leftIcon={<FaEnvelope style={styles.gmail} />}
                                            />
                                        </mat.List>
                                    </div>
                                    <div className='col-md-5'>
                                        <mat.List>
                                            <Link target="_blank" to="https://www.facebook.com/The-Fabric-store-1866263960272860/" >
                                                <mat.ListItem
                                                    style={{ marginLeft: 30 }}
                                                    primaryText="The Fabric Store"
                                                    leftIcon={<FaFacebookSquare style={styles.facebook} />}
                                                />
                                            </Link>
                                        </mat.List>
                                    </div>
                                    <div className='col-md-5'>
                                        <mat.List>
                                            <Link target="_blank" to="https://www.linkedin.com/feed/?trk=">
                                                <mat.ListItem
                                                    style={{ marginLeft: 30 }}
                                                    primaryText="No1Collection"
                                                    leftIcon={<FaLinkedinSquare style={styles.linkedin} />}
                                                />
                                            </Link>
                                        </mat.List>
                                    </div>
                                </div>
                            </blockquote>
                        </div>

                    </mat.Card>
                </div>
                <div>
                    <div>
                        <mat.Dialog
                            title="Feed Back"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            <EmailForm />
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


export default ContactUs;