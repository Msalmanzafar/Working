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
        fontWeight: 'bold',
        fontFamily:'helvetica',
    },
    text:{
        margin: 30,
        fontSize: 16,
        textAlign: 'justify',
        color: 'black'
    },
    impo:{
        color: 'red',
        fontWeight: 'bold'
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
                                    <div className='col-md-12' >
                                        <blockquote style={{ border: 'none' }}>
                                            <h2 style={styles.heading}>Company Introduction</h2>
                                            <p style={styles.text}>
                                                <span style={styles.impo}>No.1 group of Companies</span> was incorporated on August 2005. <span style={styles.impo}>No.1 Collection </span> 
                                                provides a full range of furnishing fabric to fulfill the needs of all of its cutomers
                                                being wholesale & retail clinets. Sinece then the Company hase made progress in widely diverse fields. 
                                                At present, the Company is trendstter in furnishing fabric industries and also has a remarkable presence 
                                                in Viscose, Jute, Chaneel, Jacqard, Embroidery, Organza, Titanic, Digital Prints.
                                                <br/>
                                                Our Collection harmonize interior design, sophistication, and excitement, with quality, richness, 
                                                and choices, and fully addresses their fashion needs. Our supplier belongs to round the globe from China,
                                                 Morocco, Dubai, turkey & India.
                                            </p>
                                        </blockquote>
                                    </div>
                                    <div className="col-md-12">
                                        <blockquote style={{ border: 'none' }}>
                                            <h2 style={styles.heading}>Our Vision</h2>
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