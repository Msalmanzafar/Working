import React, { Component } from 'react';



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
        listStyleType: 'none'
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
                            <h4 style={styles.listHeading}>LET US HELP YOU</h4>
                            <div style={styles.list}>
                                <p> <a href="" style={styles.listLink}>Help Center</a> </p>
                                <p> <a href="" style={styles.listLink}>How to Shop on No.1 Collection</a> </p>
                                <p> <a href="" style={styles.listLink}>Track Your Order</a> </p>
                                <p> <a href="" style={styles.listLink}>Contact Us</a> </p>
                            </div>
                        </div>
                        <div className='col-md-3' style={styles.footerContent4}>
                            <h4 style={styles.listHeading}>JOIN US ON</h4>
                            <div style={styles.list}>
                                <p> <a href="" style={styles.listLink}>Help Center</a> </p>
                                <p> <a href="" style={styles.listLink}>How to Shop on No.1 Collection</a> </p>
                                <p> <a href="" style={styles.listLink}>Track Your Order</a> </p>
                                <p> <a href="" style={styles.listLink}>Contact Us</a> </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default FooterOfCollection;