import React, { Component } from 'react';
import * as mat from 'material-ui';

import ProImage1 from '../../Images/Others/IMG_0572.JPG';
import ProImage2 from '../../Images/Others/IMG_0573.JPG';
import ProImage3 from '../../Images/Others/IMG_0574.JPG';
import ProImage4 from '../../Images/Others/IMG_0575.JPG';
import ProImage5 from '../../Images/Others/IMG_0576.JPG';
import ProImage6 from '../../Images/Others/IMG_0577.JPG';
import ProImage7 from '../../Images/Others/IMG_0578.JPG';
import ProImage8 from '../../Images/Others/IMG_0579.JPG';
import ProImage9 from '../../Images/Others/IMG_0580.JPG';
import ProImage10 from '../../Images/Others/IMG_0581.JPG';
import ProImage11 from '../../Images/Others/IMG_0582.JPG';
import ProImage12 from '../../Images/Others/IMG_0583.JPG';
import ProImage13 from '../../Images/Others/IMG_0584.JPG';
import ProImage14 from '../../Images/Others/IMG_0585.JPG';
import ProImage15 from '../../Images/Others/IMG_0586.JPG';
import ProImage16 from '../../Images/Others/IMG_0587.JPG';
import ProImage17 from '../../Images/Others/IMG_0588.JPG';
import ProImage18 from '../../Images/Others/IMG_0589.JPG';
import ProImage19 from '../../Images/Others/IMG_0539.JPG';
import ProImage20 from '../../Images/Others/IMG_0540.JPG';
import ProImage21 from '../../Images/Others/IMG_0541.JPG';
import ProImage22 from '../../Images/Others/IMG_0542.JPG';
import ProImage23 from '../../Images/Others/IMG_0543.JPG';
import ProImage24 from '../../Images/Others/IMG_0629.JPG';
import ProImage25 from '../../Images/Others/IMG_0632.JPG';
import ProImage26 from '../../Images/Others/IMG_0633.JPG';
import ProImage27 from '../../Images/Others/IMG_0634.JPG';
import ProImage28 from '../../Images/Others/IMG_0635.JPG';
import ProImage29 from '../../Images/Others/IMG_0636.JPG';
import ProImage30 from '../../Images/Others/IMG_0637.JPG';
import ProImage31 from '../../Images/Others/IMG_0638.JPG';
import ProImage32 from '../../Images/Others/IMG_0639.JPG';



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
        height: 'auto',
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
        id: '008'
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
        id: '010'
    },
    {
        img: ProImage13,
        title: 'TheFabric',
    },
    {
        img: ProImage14,
        title: 'TheFabric',
        id: '010'
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
        img: ProImage32,
        title: 'TheFabric',
    },
];

class Others extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false

        }
    }
    tempArray = []
    stars = (key) => {
        // console.log("Big Images", key);
        this.tempArray = [];
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
                            title='Others'
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
                            actions={actions}
                            modal={false}
                            contentStyle={{ width: '70%', maxWidth: 'none', }}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                        >
                            {this.tempArray.map((v, i) => {
                                return (
                                    <img key={i} src={v.img} alt="img" style={{ width: '100%',height: 430}} />
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

export default Others;