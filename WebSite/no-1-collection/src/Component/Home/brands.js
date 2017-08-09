import React, { Component } from 'react';
import { browserHistory } from 'react-router'
import Slide1 from '../Images/main3.jpg';
import Slide2 from '../Images/Trendz.png';
import Slide3 from '../Images/Vintage.png';

const styles = {
    brandz: {
        width: 225,
        height: 120,
        margin: 10,
        cursor: 'pointer',
        borderRadius: 5,
        opacity: 1
        // boxShadow: '1px 2px 3px gray',
    },
    brandzBox: {
        marginTop: -210,
        position: 'relative',
        zIndex: 10,
        // backgroundColor: 'rgba(255,255,255,0.1)'
    }
}

class BrandsLogos extends Component {
    constructor(props) {
        super(props);
        this.theFebric = this.theFebric.bind(this);
    }
    theFebric() {
        console.log("theFebric----You Click it");
        browserHistory.push('/thefebricstore');
    }
    render() {
        return (
            <div>
                <div className="container-flux text-center" style={styles.brandzBox}>
                    <div className='col-xs-12 col-md-12'>
                        <h2 className="text-center " style={{ color: 'white', fontWeight: 'bold', textShadow: '1px 2px 3px black' }}>
                            Our Brands Is Just On One Click
                        </h2>
                        <img onClick={this.theFebric} src={Slide1} style={styles.brandz} alt="the febric" />
                        <img src={Slide2} style={styles.brandz} alt="trendz" />
                        <img src={Slide3} style={styles.brandz} alt="vintage" />
                    </div>

                </div>
            </div>
        );
    }
}

export default BrandsLogos;