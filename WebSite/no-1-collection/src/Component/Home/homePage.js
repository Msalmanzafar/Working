import React, { Component } from 'react';
import Slide1 from '../Images/country-style-valances-for-living-room.jpg';
import Slide2 from '../Images/maxresdefault.jpg';
import Slide3 from '../Images/orange-leather-sofas.jpg';
import Slide4 from '../Images/orange-and-brown-living-room-curtains.jpg';

const styles={
    sliderBox:{
        boxShadow: "0 5px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
    },
}

class Home extends Component {
    render() {
        return (
            <div>
                <div className="container-flux" >
                    <div id="myCarousel" className="carousel slide" data-ride="carousel">
                        {/*<!-- Indicators -->*/}
                        <ol className="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            
                        </ol>

                        {/*<!-- Wrapper for slides -->*/}
                        <div className="carousel-inner">
                            <div className="item active">
                                <img src={Slide1} alt="slide1" style={{width:'100%',height:'400px'}} />
                            </div>

                            <div className="item">
                                <img src={Slide2} alt="slide2" style={{width:'100%',height:'400px'}} />
                            </div>

                            <div className="item">
                                <img src={Slide3} alt="slide3" style={{width:'100%',height:'400px'}} />
                            </div>

                            <div className="item">
                                <img src={Slide4} alt="slide4" style={{width:'100%',height:'400px'}} />
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
            </div>
        );
    }
}

export default Home;