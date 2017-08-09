import React, { Component } from 'react';

import Slide1 from '../Images/download.jpg';
import Slide2 from '../Images/57300-9050571.jpg';
import Slide3 from '../Images/Pink-wallpaper-curtains-and-sofa.jpg';
import Slide4 from '../Images/shof_b11ef8d8295230f.jpg';
import Slide5 from '../Images/eei-645-exp-ora_3_.jpg';

import Sales from './sales';
// import BrandsLogos from './brands';
import FooterOfCollection from './footer';
import Subscribe from './subscribe';
// import $ from 'jquery';


const styles = {
    wel: {
        textShadow: '1px 1px 2px gray, 0 0 25px #8bc34a, 0 0 5px #8bc34a',
        fontWeight: 'bold',
        color: '#009688',
        // fontSize: '25px'
    },
}

class Home extends Component {
    componentDidMount(){
        // window.location.reload();
    }
    render() {
        return (
            <div>
                <div className="container-flux " style={{ top: -20,position: 'relative', zIndex: 2, opacity: 0.9 }}>
                    <div id="myCarousel" className="carousel slide " data-ride="carousel">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators" >
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>

                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={Slide1} alt="slide1" style={{ width: '100%', height: '600px' }} />
                            </div>

                            <div className="item">
                                <img src={Slide2} alt="slide2" style={{ width: '100%', height: '600px' }} />
                            </div>

                            <div className="item">
                                <img src={Slide3} alt="slide3" style={{ width: '100%', height: '600px' }} />
                            </div>

                            <div className="item">
                                <img src={Slide4} alt="slide4" style={{ width: '100%', height: '600px' }} />
                            </div>
                            <div className="item">
                                <img src={Slide5} alt="slide5" style={{ width: '100%', height: '600px' }} />
                            </div>
                        </div>

                        {/*<!-- Left and right controls -->*/}
                        <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span className="glyphicon glyphicon-chevron-left"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

                {/* <BrandsLogos /> */}
                <div className="container"  style={{ position: 'relative'}}>
                    <h2 className="text-center h1" style={styles.wel}>
                        Welcome To <span>No.1 Collection</span>
                    </h2>
                    <h5 className="text-center h4">LogIn for the best experience</h5>
                </div>
                <Sales />
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
}

export default Home;