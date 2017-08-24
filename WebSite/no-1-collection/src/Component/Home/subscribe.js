import React, { Component } from 'react';
import * as mat from 'material-ui';
import Logo from '../Images/no1Collection.png';
import FaApple from 'react-icons/lib/fa/apple';
import FaAndroid from 'react-icons/lib/fa/android';
import './style.css';

const styles = {
    box: {
        // backgroundColor: '#d9d9d9',
        backgroundColor: '#e0e0e0',
        height: 'auto',
        position: 'relative',
        borderBottom: '1px solid gray'
    },
    div1: {
        padding: 0,
        margin: '4% 0% 3% 2%',
        // border: '2px solid blue',
    },
    div2: {
        padding: 0,
        margin: '0% 0% 0% 0%',
        // border: '2px solid blue',
    },
    div3: {
        padding: 0,
        margin: '4% 0% 0% 0%',
        // border: '2px solid blue',
        float: 'right',
    },
    logos: {
        width: '100%',
        height: 'auto',
    },

    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#808080'
    },
    info: {
        fontSize: 15,
        color: '#808080'
    },
    download: {
        margin: 9,
    },
    subs: {
        fontSize: 12,
        fontWeight: 'bold',
        // lineHeight: 0.4
        color: '#808080'
    },
    subInput: {
        // float: 'left',
        // width: "55%",
        marginLeft: 12
        // fontSize: 14
    }
}
class Subscribe extends Component {
    render() {
        return (
            <div>
                <div className="container-flux text-center" >
                    <div className='col-xs-12 col-md-12' style={styles.box}>
                        <section>
                            <div className="row">
                                <div className='col-xs-12 col-md-6' style={styles.div1}>
                                    <div className="col-xs-3 col-md-3" style={styles.div2}>
                                        <blockquote style={{ border: 'none' }}>
                                           <img src={Logo} alt="LOGO" style={styles.logos} />
                                        </blockquote>
                                    </div>
                                    <div className="col-xs-12 col-md-9" style={styles.div2}>
                                        <blockquote style={{ border: 'none' }}>
                                            <sapn style={styles.heading}>
                                                Shop with No1Collection on the go!
                                            </sapn><br />
                                            <span style={styles.info}>
                                                More Deals, Faster Access, Better Shopping!
                                            </span><br />
                                            <mat.RaisedButton secondary={true} label="FREE DOWNLOAD" style={styles.download} />
                                            <FaApple className='apple' />
                                            <FaAndroid className='android' />
                                        </blockquote>
                                    </div>
                                </div> 
                                <div className='col-xs-12  col-md-4 col-md-pull-1' style={styles.div3}>
                                    <blockquote style={{ border: 'none' }}>
                                        <sapn style={styles.heading}>
                                            Subscribe Now
                                    </sapn><br />
                                        <span style={styles.subs}>
                                            Subscribe to our newsletter to receive special offers and latest Events.
                                    </span><br />
                                        <mat.TextField
                                            hintText="your email here "
                                            floatingLabelText="Email"
                                            type='email'
                                            style={styles.subInput}
                                        /><br />
                                        <mat.RaisedButton secondary={true} label='Subscribe' />
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

export default Subscribe;