import React, { Component } from 'react';
import * as mat from 'material-ui';

import ProImage1 from '../../Images/Organza/IMG_0503.JPG';
import ProImage2 from '../../Images/Organza/IMG_0527.JPG';
import ProImage3 from '../../Images/Organza/IMG_0528.JPG';
import ProImage4 from '../../Images/Organza/IMG_0531.JPG';
import ProImage5 from '../../Images/Organza/IMG_0532.JPG';
import ProImage6 from '../../Images/Organza/IMG_0533.JPG';
import ProImage7 from '../../Images/Organza/IMG_0534.JPG';
import ProImage8 from '../../Images/Organza/IMG_0535.JPG';
import ProImage9 from '../../Images/Organza/IMG_0536.JPG';
import ProImage10 from '../../Images/Organza/IMG_0537.JPG';
import ProImage11 from '../../Images/Organza/IMG_0619.JPG';
import ProImage12 from '../../Images/Organza/IMG_0620.JPG';
import ProImage13 from '../../Images/Organza/IMG_0621.JPG';
import ProImage14 from '../../Images/Organza/IMG_0622.JPG';
import ProImage15 from '../../Images/Organza/IMG_0623.JPG';
import ProImage16 from '../../Images/Organza/IMG_0624.JPG';
import ProImage17 from '../../Images/Organza/IMG_0625.JPG';
import ProImage18 from '../../Images/Organza/IMG_0626.JPG';
import ProImage19 from '../../Images/Organza/IMG_0627.JPG';
import ProImage20 from '../../Images/Organza/IMG_0627.JPG';
import ProImage21 from '../../Images/Organza/IMG_0628.JPG';



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
        height: 'auto',
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
        // author: 'jill111',
    },
    {
        img: ProImage13,
        title: 'TheFabric',
        // author: 'jill111',
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


];

class Organza extends Component {
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
                            title='Organza'
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
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                            autoScrollBodyContent={true}
                            contentStyle={{ width: '70%', maxWidth: 'none', }}
                        >
                            {this.tempArray.map((v,i)=>{
                                return(
                                    <img key={i} src={v.img} alt="img" style={{width: '100%',height: 430}}/>
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

export default Organza;