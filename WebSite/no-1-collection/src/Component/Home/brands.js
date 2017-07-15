import React, { Component } from 'react';

import Slide1 from '../Images/main3.jpg';
import Slide2 from '../Images/Trendz.png';
import Slide3 from '../Images/Vintage.png';

const styles={
    brandz:{
        width: 210, 
        height: 110,
        margin: 10,
        cursor: 'pointer',
        borderRadius: 5,
        boxShadow: '1px 2px 3px gray',
    }
}

class BrandsLogos extends Component {
    constructor(props){
        super(props);
        this.theFebric = this.theFebric.bind(this);
    }
    theFebric(){
        console.log("theFebric----You Click it")
    }
    render() {
        return (
            <div>
                <div className="container text-center" style={{ margin: 20 }}>
                    <h3 className="text-center ">Click And Moves Over Brands</h3>
                    <img onClick={this.theFebric} src={Slide1} style={styles.brandz} alt="the febric" />
                    <img src={Slide2} style={styles.brandz} alt="trendz" />
                    <img src={Slide3} style={styles.brandz} alt="vintage" />
                </div>
            </div>
        );
    }
}

export default BrandsLogos;