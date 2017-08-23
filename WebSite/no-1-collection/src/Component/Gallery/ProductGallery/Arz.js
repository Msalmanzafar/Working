import React, { Component } from 'react';
import * as mat from 'material-ui';

import ProImage1 from '../../Images/DoubleArz/IMG_0431.JPG';
import ProImage2 from '../../Images/DoubleArz/IMG_0435.JPG';
import ProImage3 from '../../Images/DoubleArz/IMG_0437.JPG';
import ProImage4 from '../../Images/DoubleArz/IMG_0444.JPG';
import ProImage5 from '../../Images/DoubleArz/IMG_0445.JPG';
import ProImage6 from '../../Images/DoubleArz/IMG_0448.JPG';
import ProImage7 from '../../Images/DoubleArz/IMG_0449.JPG';
import ProImage8 from '../../Images/DoubleArz/IMG_0518.JPG';
import ProImage9 from '../../Images/DoubleArz/IMG_0519.JPG';
import ProImage10 from '../../Images/DoubleArz/IMG_0520.JPG';
import ProImage11 from '../../Images/DoubleArz/IMG_0521.JPG';
import ProImage12 from '../../Images/DoubleArz/IMG_0522.JPG';
import ProImage13 from '../../Images/DoubleArz/IMG_0523.JPG';
import ProImage14 from '../../Images/DoubleArz/IMG_0524.JPG';
import ProImage15 from '../../Images/DoubleArz/IMG_0525.JPG';
import ProImage16 from '../../Images/DoubleArz/IMG_0526.JPG';



// import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subscribe from '../../Home/subscribe';
import FooterOfCollection from '../../Home/footer';


const styles = {
    gallery: {
        marginTop: 50,
    },
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        height: 550,
        overflowY: 'auto',
    },
}

const tilesData = [
    {
        img: ProImage1,
        title: 'TheFabric',
        // author: 'jill111',
    },
    {
        img: ProImage2,
        title: 'TheFabric',
        // author: 'jill111',
    },
    {
        img: ProImage3,
        title: 'TheFabric',
    },
    {
        img: ProImage4,
        title: 'TheFabric',
    },
    {
        img: ProImage5,
        title: 'TheFabric',
    },
    {
        img: ProImage6,
        title: 'TheFabric',
    },
    {
        img: ProImage7,
        title: 'TheFabric',
    },
    {
        img: ProImage8,
        title: 'TheFabric',
    },
    {
        img: ProImage9,
        title: 'TheFabric',
    },
    {
        img: ProImage10,
        title: 'TheFabric',
    },
    {
        img: ProImage11,
        title: 'TheFabric',
    },
    {
        img: ProImage12,
        title: 'TheFabric',
    },
    {
        img: ProImage13,
        title: 'TheFabric',
    },
    {
        img: ProImage14,
        title: 'TheFabric',
    },
    {
        img: ProImage15,
        title: 'TheFabric',
    },
    {
        img: ProImage16,
        title: 'TheFabric',
    },
];

class DoubleArz extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false

        }
    }
    tempArray = []
    stars = (key) => {
        // console.log("Big Images", key);
        this.tempArray=[];
        this.setState({ open: true });
        for (let i = 0; i < tilesData.length; i++) {
            if (key === i) {
                this.tempArray = this.tempArray.concat(tilesData[i]);
            }
        }
    }

    handleClose = () => {
        this.setState({ open: false });
    };
    render() {
        const actions = [
            <mat.FlatButton
                label="Cancel"
                primary={true}
                keyboardFocused={true}
                onTouchTap={this.handleClose}
            />,
        ];
        // console.log("images", this.tempArray)

        return (
            <div>
                <div className='container' style={styles.gallery}>
                    <mat.Card
                        zDepth={2}
                        style={{ position: 'relative', borderRadius: 4 }}
                    >
                        <mat.AppBar
                            titleStyle={{ fontSize: 28, textShadow: '2px 2px 5px black', fontWeight: 500, textAlign: 'left' }}
                            showMenuIconButton={false}
                            title='Double Arz'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#9f0500' }}
                        />
                        <mat.CardText>
                            <div className='container-flux'>
                                <div style={styles.root}>
                                    <mat.GridList
                                        cols={4}
                                        cellHeight={'auto'}
                                        padding={2}
                                        style={styles.gridList}
                                        className='col-xs-12 col-md-11'
                                    >
                                        <mat.Subheader>2017</mat.Subheader>
                                        {tilesData.map((v, i) => (
                                            <mat.GridTile
                                                key={i}
                                                title={v.title}
                                                titleStyle={{ textAlign: 'left' }}
                                                actionIcon={
                                                    <mat.FlatButton
                                                        label='View'
                                                        labelStyle={{ color: 'white' }}
                                                        onClick={this.stars.bind(this, i)}
                                                    />

                                                }
                                            >
                                                <img src={v.img} style={{ width: '100%' }} alt='' />
                                            </mat.GridTile>
                                        ))}

                                    </mat.GridList>
                                </div>
                            </div>
                        </mat.CardText>
                    </mat.Card>
                </div>
                <div>
                    <div>
                        <mat.Dialog
                            title="Big Image"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            {this.tempArray.map((v,i)=>{
                                return(
                                    <img key={i} src={v.img} alt="img" style={{width: '100%'}}/>
                                )
                            })}
                        </mat.Dialog>
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

export default DoubleArz;