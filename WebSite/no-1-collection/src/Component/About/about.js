import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';


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
    about: {
        backgroundColor: '#b3b3b3',

    },
    aboutCaontainer: {
        marginTop: 30,
        position: 'relative',
    },
    heading: {
        margin: '30px 0px 10px 30px',
        color: '#f44336',
    },
    text:{
        margin: 30,
        fontSize: 16,
        textAlign: 'justify',
        color: 'black'
    },
}
class AboutNo1Collection extends Component {
    render() {
        return (
            <div>
                <div className='container' style={styles.aboutCaontainer}>
                    <div className='col-md-12' >
                        <mat.Card style={style} zDepth={2}>
                            <mat.AppBar
                                titleStyle={{
                                    textShadow: '0px 1px 2px black',
                                    fontWeight: 'bold',
                                    textAlign: 'left'
                                }}
                                title='About Us'
                                showMenuIconButton={false}
                                style={styles.about}
                            />
                            <div className='col-md-12'>
                                <div className='row'>
                                    <div className='col-md-12' style={{border: '2px solid red'}}>
                                        <blockquote style={{ border: 'none' }}>
                                            <h3 style={styles.heading}>Nursery</h3>
                                            <p style={styles.text}>
                                                188/B Block 2 PECHS Main Nursery Furniture
                                                Market behind Blue Ribbon Bakery Karachi.<br />
                                                Ph# 34541225 / 3459395
                                            </p>
                                        </blockquote>
                                    </div>
                                </div>
                            </div>
                        </mat.Card>
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

export default AboutNo1Collection;