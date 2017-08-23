import React, { Component } from 'react';
// import { browserHistory } from 'react-router';

import FaFacebookSquare from 'react-icons/lib/fa/facebook-square';
import FaGooglePlusSquare from 'react-icons/lib/fa/google-plus-square';
import FaTwitterSquare from 'react-icons/lib/fa/twitter-square';
import FaLinkedinSquare from 'react-icons/lib/fa/linkedin-square';
import './style.css'

import { Link } from 'react-router';


const styles = {
    footer: {
        backgroundColor: '#9f0500',
        // backgroundColor: '#e0e0e0',
        position: 'relative'
    },
    footerContent1: {
        height: 'auto',
        marginTop: 10,
        textAlign: 'left',
        // display: 'inline-block',
        // border: '2px solid black'
    },

    list: {
        lineHeight: 0.8
    },
    listHeading: {
        color: 'white',
        textShadow: '0px 1px 2px gray'
    },
    listLink: {
        color: 'white',
        fontSize: 14,
    },
    
}
class FooterOfCollection extends Component {
    
    render() {
        return (
            <div>
                <div className="container-flux " >
                    <div className='col-xs-12 col-md-12 text-center' style={styles.footer}>
                        <section>
                            <div className='row'>
                                <div className='col-xs-12 col-md-3' style={styles.footerContent1}>
                                    <blockquote style={{ border: 'none' }}>
                                        <h4 style={styles.listHeading}>LET US HELP YOU</h4>
                                        <div style={styles.list}>
                                            <p> <Link to='/contactus'  style={styles.listLink}>Contact Us</Link> </p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className='col-xs-12 col-md-3' style={styles.footerContent1}>
                                    <blockquote style={{ border: 'none' }}>
                                        <h4 style={styles.listHeading}>GET TO KNOW US</h4>
                                        <div style={styles.list}>
                                            <p> <Link to='/about' style={styles.listLink}>About Us</Link> </p>
                                            <p> <Link to='/contactus' style={styles.listLink}>Contact Us</Link> </p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className='col-xs-12 col-md-3' style={styles.footerContent1}>
                                    <blockquote style={{ border: 'none' }}>
                                        <h4 style={styles.listHeading}>NO1COLLECTION INTERNATIONAL</h4>
                                        <div style={styles.list}>
                                            <p> <a href="" style={styles.listLink}>Pakistan</a> </p>
                                            <p> <a href="" style={styles.listLink}>Turkey</a> </p>
                                            <p> <a href="" style={styles.listLink}>China</a> </p>
                                            <p> <a href="" style={styles.listLink}>Africa </a> </p>
                                        </div>
                                    </blockquote>
                                </div>
                                <div className='col-xs-12 col-md-3' style={styles.footerContent1}>
                                    <blockquote style={{ border: 'none' }}>
                                        <h4 style={styles.listHeading}>JOIN US ON</h4>
                                        <div >
                                            <Link target='_blank' to='https://www.facebook.com/The-Fabric-store-1866263960272860/' style={styles.listLink}>
                                                <FaFacebookSquare className='icons'/>
                                            </Link>
                                            <Link to='' style={styles.listLink}>
                                                <FaGooglePlusSquare className='icons'/>
                                            </Link>
                                            <Link to='' style={styles.listLink}>
                                                <FaTwitterSquare className='icons'/>
                                            </Link>
                                            <Link to='' style={styles.listLink}>
                                                <FaLinkedinSquare className='icons'/>
                                            </Link>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </section>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterOfCollection;