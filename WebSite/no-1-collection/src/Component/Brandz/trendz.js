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
class TrendzStore extends Component {
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
                            title='TRENDZ'
                            showMenuIconButton={false}

                        />
                        <div className='col-md-12' >
                            <div className='row' >
                                <div className='col-md-12' >
                                    <blockquote style={{ border: 'none' }}>
                                        <h3 style={styles.heading}>Defence</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20 }}
                                                    primaryText="Plot No.51-C, 27th Commercial Street, Tauheed Commercial Area, Phase 5 DHA, Karachi."
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
                                                    primaryText="35294793-94 / 0310-2345787"
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
                                        <h3 style={styles.heading}>Nursery</h3>
                                        <div className='col-md-7'>
                                            <mat.List>
                                                <mat.ListItem
                                                    disableKeyboardFocus={true}
                                                    disabled={true}
                                                    style={{ marginLeft: 20, fontFamily: 'Arial' }}
                                                    primaryText="Shop No-4, 190 A1, Block-2, PECHS, MAin Nursery Furniture Market, Karachi."
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
                                                    primaryText="34541222"
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

export default TrendzStore;