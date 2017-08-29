import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';
import FaPhoneSquare from 'react-icons/lib/fa/phone-square';
import FaMapMarker from 'react-icons/lib/fa/map-marker';

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
class TheFabricStore extends Component {
    render() {
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
                            title='The Fabric Store'
                            showMenuIconButton={false}

                        />
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    <blockquote style={{ border: 'none' }}>
                                        <h3 style={styles.heading}>Nursery</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20 }}
                                                    primaryText="188/B Block 2, PECHS, Main Nursery Furniture Market behind Blue Ribbon Bakery, Karachi."
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
                            </div>
                        </div>
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    <blockquote style={{ border: 'none' }}>
                                        <h3 style={styles.heading}>Manzoor Colony</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20, fontFamily: 'Arial' }}
                                                    primaryText="Shop No.38 Sector 1, Millat Society, Express way, Chaudary Rehmat Ali Road, Main Muhammadi Furniture Markeet, Manzoor Colony, Karachi."
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
                                                    style={{ marginLeft: 20, fontFamily: 'Arial' }}
                                                    primaryText="021-35380905"
                                                    leftIcon={<FaPhoneSquare style={styles.map} />}
                                                />
                                            </mat.List>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    <blockquote style={{ border: 'none' }}>
                                        <h3 style={styles.heading}>Gulshan e Iqbal</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20, fontFamily: 'Arial' }}
                                                    primaryText="Shop No.5-B, Hasan Apartment Ext, Block 13-D, Gulshan e iqbal, Karachi."
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
                                                    style={{ marginLeft: 20, fontFamily: 'Arial' }}
                                                    primaryText="021-34830915"
                                                    leftIcon={<FaPhoneSquare style={styles.map} />}
                                                />
                                            </mat.List>
                                        </div>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </mat.Card>
                </div>
                <br />
                <br />

                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
}

export default TheFabricStore;