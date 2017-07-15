import React, { Component } from 'react';

import facebook from '../Images/facebook.png'
import gmail from '../Images/connect.png'
import twiter from '../Images/tweeter.png'
import instagram from '../Images/logo-insta.png'


const styles = {
    footer: {
        backgroundColor: '#ea2d13',
        // boxShadow: '0px -4px 8px gray'
    },
    footerContent1: {
        height: 'auto',
        width: '23%',
        marginTop: 10,
        textAlign: 'left',
        display: 'inline-block',
        border: '2px solid black'
    },
    footerContent2: {
        height: 'auto',
        width: '23%',
        marginTop: 10,
        textAlign: 'left',
        display: 'inline-block',
        border: '2px solid black'
    },
    footerContent3: {
        height: 'auto',
        width: '23%',
        marginTop: 10,
        textAlign: 'left',
        display: 'inline-block',
        border: '2px solid black'
    },
    footerContent4: {
        height: 'auto',
        width: '30%',
        marginTop: 10,
        textAlign: 'left',
        display: 'inline-block',
        border: '2px solid black'
    },

    list:{
        lineHeight: 0.8
    },
    listHeading:{
        color: 'white',
        textShadow: '0px 1px 2px black'
    },
    listLink:{
        color: 'white',
        fontSize: 14,
    }
}
class FooterOfCollection extends Component {
    render() {
        return (
            <div>
                <div className="container-flux " >
                    <div className='col-md-12 text-center' style={styles.footer}>
                        <div className='col-md-3' style={styles.footerContent1}>
                            <h4 style={styles.listHeading}>LET US HELP YOU</h4>
                            <div style={styles.list}>
                                <p> <a href="" style={styles.listLink}>Help Center</a> </p>
                                <p> <a href="" style={styles.listLink}>How to Shop on No.1 Collection</a> </p>
                                <p> <a href="" style={styles.listLink}>Track Your Order</a> </p>
                                <p> <a href="" style={styles.listLink}>Contact Us</a> </p>
                            </div>
                        </div>
                        <div className='col-md-3' style={styles.footerContent2}>
                            <h4 style={styles.listHeading}>LET US HELP YOU</h4>
                            <div style={styles.list}>
                                <p> <a href="" style={styles.listLink}>Help Center</a> </p>
                                <p> <a href="" style={styles.listLink}>How to Shop on No.1 Collection</a> </p>
                                <p> <a href="" style={styles.listLink}>Track Your Order</a> </p>
                                <p> <a href="" style={styles.listLink}>Contact Us</a> </p>
                            </div>
                        </div>
                        <div className='col-md-3' style={styles.footerContent3}>
                            <h4 style={styles.listHeading}>NO1COLLECTION INTERNATIONAL</h4>
                            <div style={styles.list}>
                                <p> <a href="" style={styles.listLink}>Pakistan</a> </p>
                                <p> <a href="" style={styles.listLink}>Turkey</a> </p>
                                <p> <a href="" style={styles.listLink}>China</a> </p>
                                <p> <a href="" style={styles.listLink}>Africa </a> </p>
                            </div>
                        </div>
                        <div className='col-md-3' style={styles.footerContent4}>
                            <h4 style={styles.listHeading}>JOIN US ON</h4>
                            <div >
                                <a href="" style={styles.listLink}>
                                    <img src={facebook} alt="facebook" style={{width: 65, height: 63,marginRight: -4}}/>
                                </a>
                                <a href="" style={styles.listLink}>
                                    <img src={gmail} alt="gmail" style={{width: 44, height: 42,marginRight: 0}}/>
                                </a>
                                <a href="" style={styles.listLink}>
                                    <img src={twiter} alt="twiter" style={{width: 55, height: 53,marginRight: -2}}/>
                                </a>
                                <a href="" style={styles.listLink}>
                                    <img src={instagram} alt="instagram" style={{width: 55, height: 53,marginRight: -12}}/>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterOfCollection;