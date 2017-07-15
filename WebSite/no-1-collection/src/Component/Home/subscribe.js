import React, { Component } from 'react';
import * as mat from 'material-ui';
import Logo from '../Images/No1-Collections12.png';
import iphone from '../Images/apple-logo-512.png';
import android from '../Images/android-logo-grey1.png';


const styles = {
    subscribe: {
        backgroundColor: '#abb8c3'
    },
    box1: {
        border: '2px solid black',
        margin: 20,
        width: '49%'
    },
    forlogo:{
        border: '2px solid red',
        marginBottom: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    forDevices:{
        border: '2px solid red',
        marginBottom: 20,
        paddingTop: 5,
         
    }
}
class Subscribe extends Component {
    render() {
        return (
            <div>
                <div className="container-flux">
                    <div className="col-md-12 text-center" style={styles.subscribe}>
                        <div style={styles.box1}>
                            <div className="col-md-4" style={styles.forlogo}>
                                <img src={Logo} alt="logo" style={{ width: 165, height: 56 }} />
                            </div>
                            {/*<div className="col-md-8 text-left" style={styles.forDevices}>
                                <sapn style={{ fontWeight: 'bold', fontSize: 19, lineHeight: 0.4 }}>
                                    Shop with Daraz on the go!
                                </sapn><br />
                                <span style={{ fontSize: 12, lineHeight: 0.4 }}>
                                    More Deals, Faster Access, Better Shopping!
                                </span><br/>
                                <span>
                                    <mat.RaisedButton label="FREE DOWNLOAD NOW" style={{margin: 12}} />
                                    <img src={iphone} alt="iphone" style={{width: 40, height: 40}}/>
                                    <img src={android}alt="android" style={{width: 40, height: 40}}/>
                                    
                                </span>
                            </div>*/}

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Subscribe;