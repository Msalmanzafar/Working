import React, { Component } from 'react';
import * as mat from 'material-ui';
import Product1 from '../Images/20170712_142450.jpg';
import Product2 from '../Images/20170712_142855.jpg';
import Product3 from '../Images/20170712_142919.jpg';


import StarBorder from 'material-ui/svg-icons/toggle/star-border';

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
        img: Product1,
        title: 'TheFabric',
        // author: 'jill111',
    },
    {
        img: Product2,
        title: 'TheFabric',
        // author: 'jill111',
    },
    {
        img: Product3,
        title: 'TheFabric',
    }
    

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
            </div>
        );
    }
}

export default ProductGallery;