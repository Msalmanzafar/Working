import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';

import Vision from '../Images/OurVision.png'

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
        backgroundColor: '#9f0500',

    },
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
    text: {
        // margin: '20px 35px 0px 35px',
        fontSize: 16,
        textAlign: 'justify',
        color: 'black'
    },
    impo: {
        color: 'red',
        fontWeight: 'bold'
    },
}
class MissionNo1Collection extends Component {
    render() {
        return (
            <div>
                <div className='container' style={styles.aboutCaontainer}>
                    <mat.Card style={style} zDepth={2}>
                        <mat.AppBar
                            titleStyle={{
                                textShadow: '0px 1px 2px black',
                                fontWeight: 'bold',
                                textAlign: 'left'
                            }}
                            title='Mission'
                            showMenuIconButton={false}
                            style={styles.about}
                        />
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-10'>
                                    <blockquote style={{ border: 'none' }}>
                                        <h2 style={styles.heading}>
                                            Our Mission
                                            </h2>
                                        <p style={styles.text}>
                                            <span style={styles.impo}>No.1 Group of Companies</span> is devoted to achieve consistent
                                                improvement in the system of providing products & service to the customers and explore new
                                                markets to promote / expand sales of the Company through good governance and foster a sound
                                                and dynamic team, so as to achieve optimum prices of products of the Company of sustainable
                                                and equitable growth and prosperity of the Company.
                                            </p>
                                        <br />
                                        <br />
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className='row'>
                                <div className='col-md-7'>
                                    <blockquote style={{ border: 'none' }}>
                                        <h2 style={styles.heading}>Our Vision</h2>
                                        <p style={styles.text}>
                                            The Vision of <span style={styles.impo}>No.1 Group of Companies</span> is to be the largest
                                                and best retail & whole sale organization in fabric industry, through offering
                                                the best products not only on time but also provide efficient service.
                                            </p>
                                    </blockquote>
                                </div>
                                <div className='col-md-4'>
                                    <blockquote style={{ border: 'none' }}>
                                        <img src={Vision} alt="Vision" style={{ width: 330 }} />
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

export default MissionNo1Collection;