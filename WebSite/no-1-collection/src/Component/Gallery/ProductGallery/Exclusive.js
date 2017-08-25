import React, { Component } from 'react';
import * as mat from 'material-ui';

import ProImage1 from '../../Images/Exculsive/20170818_154900.jpg';
import ProImage2 from '../../Images/Exculsive/20170818_154928.jpg';
import ProImage3 from '../../Images/Exculsive/20170818_154940.jpg';
import ProImage4 from '../../Images/Exculsive/20170818_155002.jpg';
import ProImage5 from '../../Images/Exculsive/IMG_0412.JPG';
import ProImage6 from '../../Images/Exculsive/IMG_0413.JPG';
import ProImage7 from '../../Images/Exculsive/IMG_0414.JPG';
import ProImage8 from '../../Images/Exculsive/IMG_0415.JPG';
import ProImage9 from '../../Images/Exculsive/IMG_0416.JPG';
import ProImage10 from '../../Images/Exculsive/IMG_0417.JPG';
import ProImage11 from '../../Images/Exculsive/IMG_0418.JPG';
import ProImage12 from '../../Images/Exculsive/IMG_0419.JPG';
import ProImage13 from '../../Images/Exculsive/IMG_0420.JPG';
// style1
import ProImage14 from '../../Images/Exculsive/IMG_0548.JPG';
import ProImage15 from '../../Images/Exculsive/IMG_0549.JPG';
import ProImage16 from '../../Images/Exculsive/IMG_0550.JPG';
import ProImage17 from '../../Images/Exculsive/IMG_0551.JPG';
// style2
import ProImage18 from '../../Images/Exculsive/IMG_0552.JPG';
import ProImage19 from '../../Images/Exculsive/IMG_0553.JPG';
import ProImage20 from '../../Images/Exculsive/IMG_0554.JPG';
import ProImage21 from '../../Images/Exculsive/IMG_0555.JPG';
// style3
import ProImage22 from '../../Images/Exculsive/IMG_0556.JPG';
import ProImage23 from '../../Images/Exculsive/IMG_0558.JPG';
import ProImage24 from '../../Images/Exculsive/IMG_0559.JPG';
import ProImage25 from '../../Images/Exculsive/IMG_0560.JPG';
// style4
import ProImage26 from '../../Images/Exculsive/IMG_0561.JPG';
import ProImage27 from '../../Images/Exculsive/IMG_0562.JPG';
import ProImage28 from '../../Images/Exculsive/IMG_0563.JPG';
import ProImage281 from '../../Images/Exculsive/IMG_0563.0.JPG';
// style5
import ProImage29 from '../../Images/Exculsive/IMG_0564.JPG';
import ProImage30 from '../../Images/Exculsive/IMG_0565.JPG';
import ProImage31 from '../../Images/Exculsive/IMG_0566.JPG';
import ProImage311 from '../../Images/Exculsive/IMG_0566.0.JPG';
// style6
import ProImage32 from '../../Images/Exculsive/IMG_0567.JPG';
import ProImage33 from '../../Images/Exculsive/IMG_0568.JPG';
import ProImage34 from '../../Images/Exculsive/IMG_0569.JPG';
import ProImage35 from '../../Images/Exculsive/IMG_0570.JPG';

import ProImage36 from '../../Images/Exculsive/IMG_0595.JPG';





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
    },
    {
        img: ProImage2,
        title: 'TheFabric',
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
    {
        img: ProImage17,
        title: 'TheFabric',
    },
    {
        img: ProImage18,
        title: 'TheFabric',
    },
    {
        img: ProImage19,
        title: 'TheFabric',
    },
    {
        img: ProImage20,
        title: 'TheFabric',
    },
    {
        img: ProImage21,
        title: 'TheFabric',
    },
    {
        img: ProImage22,
        title: 'TheFabric',
    },
    {
        img: ProImage23,
        title: 'TheFabric',
    },
    {
        img: ProImage24,
        title: 'TheFabric',
    },
    {
        img: ProImage25,
        title: 'TheFabric',
    },
    {
        img: ProImage26,
        title: 'TheFabric',
    },
    {
        img: ProImage27,
        title: 'TheFabric',
    },
    {
        img: ProImage28,
        title: 'TheFabric',
    },
    {
        img: ProImage281,
        title: 'TheFabric',
    },
    {
        img: ProImage29,
        title: 'TheFabric',
    },
    {
        img: ProImage30,
        title: 'TheFabric',
    },
    {
        img: ProImage31,
        title: 'TheFabric',
    },
    {
        img: ProImage311,
        title: 'TheFabric1',
    },
    {
        img: ProImage32,
        title: 'TheFabric',
    },
    {
        img: ProImage33,
        title: 'TheFabric',
    },
    {
        img: ProImage34,
        title: 'TheFabric',
    },
    {
        img: ProImage35,
        title: 'TheFabric',
    },
    {
        img: ProImage36,
        title: 'TheFabric',
    },
];



class Exclusive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false

        }
    }
    BigImage = []
    stars = (key) => {
        // console.log("Big Images", key);
        this.BigImage = [];
        this.setState({ open: true });
        for (let i = 0; i < tilesData.length; i++) {
            if (key === i) {
                this.BigImage = this.BigImage.concat(tilesData[i]);
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
        // console.log("images", this.BigImage)

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
                            title='Exclusive'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#9f0500' }}
                        />
                        <mat.CardText>
                            <div className='container-flux'>
                                <div style={styles.root}>
                                    <mat.GridList
                                        cols={4}
                                        cellHeight={200}
                                        padding={2}
                                        style={styles.gridList}
                                    >
                                        <mat.Subheader>August 2017</mat.Subheader>
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
                                                <img src={v.img} style={{ width: '100%' }} alt='img' />
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
                            autoScrollBodyContent={true}
                            contentStyle={{ width: '70%', maxWidth: 'none', }}
                        >
                            {this.BigImage.map((v, i) => {
                                return(
                                <img key={i} src={v.img} alt="img" style={{ width: '100%' }} />
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

export default Exclusive;