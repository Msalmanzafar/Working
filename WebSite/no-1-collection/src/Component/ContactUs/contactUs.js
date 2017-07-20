import React, { Component } from 'react';
import * as mat from 'material-ui';
import theFebric from '../Images/The-Fabric-Store.png';
import Trendz from '../Images/Trendz.png';
import vintage from '../Images/Vintage.png';
import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import { Link } from 'react-router';


const style = {
    height: 'auto',
    width: '100%',
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
        margin: 30,
        textShadow: '1px 1px 2px #999999',
        color: 'black'
    },
    thefebric: {
        margin: 27,
        width: 220,
        height: 100,
        borderRadius: 4,
        boxShadow: '0px 2px 4px gray'
    },
    trendz: {
        margin: 27,
        width: 200,
        height: 100,
        borderRadius: 4,
        boxShadow: '0px 2px 4px gray'
    },
    vintage: {
        margin: '0px 27px -8px 27px ',
        width: 200,
        height: 100,
        borderRadius: 4,
        boxShadow: '0px 2px 4px gray'
    },
    facebook: {
        // margin: '0px 0px 0px 30px',
        color: '#0d47a1'
    },
    heading: {
        margin: '30px 0px 10px 30px',
        color: '#f44336',
        // fontWeight: 'bold'
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
    }
}
class ContactUs extends Component {
    constructor(props) {
        super(props);
        this.facebookPage = this.facebookPage.bind(this);
    }
    facebookPage() {
        console.log("facebookPage");
        Link.Open
    }
    render() {
        return (
            <div >
                <div className="container" style={styles.ContactContainer}>
                    <mat.Card style={style} zDepth={2} >
                        <mat.AppBar
                            style={{ backgroundColor: 'white', }}
                            title={
                                <span style={styles.titles}>Contact Us</span>
                            }
                            showMenuIconButton={false}
                        />
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-6' style={{ borderRight: '1px solid gray' }} >
                                    <blockquote style={{ border: 'none' }}>
                                        <img src={theFebric} alt="theFebric" style={styles.thefebric} />
                                        <br />
                                        <h3 style={styles.heading}>Nursery</h3>
                                        <p style={styles.text}>
                                            188/B Block 2 PECHS Main Nursery Furniture
                                            Market behind Blue Ribbon Bakery Karachi.<br />
                                            Ph# 34541225 / 3459395
                                        </p>
                                        <h3 style={styles.heading}>Manzoor Colony</h3>
                                        <p style={styles.text}>
                                            Shop no 38 Sector I, Millat Society,
                                            Express way, Chudary Rehmat Ali Road,
                                            Main Muhammadi Furniture Market,
                                            Manzoor Colony, Karachi.<br />
                                            Ph# 35380905
                                        </p>
                                        <h3 style={styles.heading}>Gulshan e Iqbal</h3>
                                        <p style={styles.text}>
                                            Shop no 5-B, Hasan Apartment Ext Block
                                            13-D, Gulshan e Iqbal, Karachi.<br />
                                            Ph# 34830915
                                        </p>
                                    </blockquote>
                                </div>
                                <div className='col-md-6' >
                                    <blockquote style={{ border: 'none' }}>
                                        <img src={Trendz} alt="theFebric" style={styles.trendz} />
                                        <br />
                                        <h3 style={styles.heading}>Defence</h3>
                                        <p style={styles.text}>
                                            Plot no 51-C, 27th Commercial Street,
                                            Tauheed Commercial Area, Phase 5,
                                            DHA, Karachi.<br />
                                            Ph# 35294793-94 / 0310-2345787
                                        </p>
                                        <h3 style={styles.heading}>Nursery</h3>
                                        <p style={styles.text}>
                                            Shop no 4, 190 A1, Block-2, PECHS,
                                            Main Nursery Furniture Market, Karachi.
                                            <br />
                                            Ph# 34541222
                                        </p>
                                        <img src={vintage} alt="vintage" style={styles.vintage} />
                                        <p style={styles.text}>
                                            Fabric available at all leading Outlets.
                                        </p>
                                    </blockquote>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12' >
                            <blockquote style={{ border: 'none' }}>
                                <h3 style={styles.headingSocial}>Get Social With Us</h3>
                                <div className="row">
                                    <div className='col-md-5'>
                                        {/* <img 
                                            src={facebookBlue} 
                                            alt="facebook" 
                                            style={styles.facebook}
                                        /><span>The Fabric Store</span> */}
                                        <mat.List>
                                            <Link target="_blank" to="https://www.facebook.com/The-Fabric-store-1866263960272860/" >
                                                <mat.ListItem
                                                    style={{ marginLeft: 30 }}
                                                    primaryText="The Fabric Store"
                                                    onClick={this.facebookPage}
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
                                                    leftIcon={<FaLinkedinSquare style={styles.facebook} />}
                                                />
                                            </Link>
                                        </mat.List>

                                    </div>
                                </div>
                            </blockquote>
                        </div>
                    </mat.Card>
                    <br />
                    <br />
                </div>
            </div>
        );
    }
}


export default ContactUs;