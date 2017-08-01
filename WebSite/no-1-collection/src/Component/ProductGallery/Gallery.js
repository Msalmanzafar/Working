import React, { Component } from 'react';
import * as mat from 'material-ui';
import ProImage1 from '../Images/20170712_142450.jpg';
import ProImage2 from '../Images/20170712_142855.jpg';
import ProImage3 from '../Images/20170712_142919.jpg';
// import ProImage4 from '../Images/20170712_14250.jpg';
// import ProImage5 from '../Images/20170712_1425.jpg';
import ProImage6 from '../Images/20170712_142523.jpg';
import ProImage7 from '../Images/20170712_142727.jpg';
import ProImage8 from '../Images/20170712_142755.jpg';
import ProImage9 from '../Images/20170712_142809.jpg';
import ProImage10 from '../Images/20170712_142820.jpg';

import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';


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
        height: 450,
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
    // {
    //     Img: ProImage4,
    //     title: 'TheFabric'
    // },
    // {
    //     Img: ProImage5,
    //     title: 'TheFabric'
    // },
    {
        img: ProImage6,
        title: 'TheFabric'
    },
    {
        img: ProImage7,
        title: 'TheFabric'
    },
    {
        img: ProImage8,
        title: 'TheFabric'
    },
    {
        img: ProImage9,
        title: 'TheFabric'
    },
    {
        img: ProImage10,
        title: 'TheFabric'
    },
    

];

class ProductGallery extends Component {
    render() {
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
                            title='Gallery '
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#b3b3b3' }}
                        />
                        <mat.CardText>
                            <div className='container-flux'>
                                <div style={styles.root}>
                                    <mat.GridList
                                        cols={3}
                                        cellHeight={170}
                                        padding={2}
                                        style={styles.gridList}
                                        className='col-md-10'
                                    >
                                        <mat.Subheader>August</mat.Subheader>
                                        {tilesData.map((tile) => (
                                            <mat.GridTile
                                                key={tile.img}
                                                title={tile.title}
                                                titleStyle={{textAlign: 'left'}}
                                                actionIcon={<mat.IconButton><StarBorder color="white" /></mat.IconButton>}
                                            >
                                                <img src={tile.img} style={{ width: '100%' }} alt='' />
                                            </mat.GridTile>
                                        ))}
                                        <mat.Subheader>August</mat.Subheader>
                                        {tilesData.map((tile) => (
                                            <mat.GridTile
                                                key={tile.img}
                                                title={tile.title}
                                                titleStyle={{textAlign: 'left'}}
                                                actionIcon={<mat.IconButton><StarBorder color="white" /></mat.IconButton>}
                                            >
                                                <img src={tile.img} style={{ width: '100%' }} alt='' />
                                            </mat.GridTile>
                                        ))}
                                    </mat.GridList>
                                </div>
                            </div>
                        </mat.CardText>
                    </mat.Card>
                </div>
                <br/>
                <br/>
                <Subscribe />
                <FooterOfCollection />
            </div>
        );
    }
}

export default ProductGallery;