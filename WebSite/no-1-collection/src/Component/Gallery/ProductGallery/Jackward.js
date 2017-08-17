import React, { Component } from 'react';
import * as mat from 'material-ui';

import ProImage1 from '../../Images/20170712_142450.jpg';
import ProImage2 from '../../Images/20170712_142855.jpg';
import ProImage3 from '../../Images/20170712_142919.jpg';
import ProImage4 from '../../Images/20170712_14250.jpg';
import ProImage5 from '../../Images/20170712_1425.jpg';
import ProImage6 from '../../Images/20170712_142523.jpg';
import ProImage7 from '../../Images/20170712_142727.jpg';
import ProImage8 from '../../Images/20170712_142755.jpg';
import ProImage9 from '../../Images/20170712_142809.jpg';
import ProImage10 from '../../Images/20170712_142820.jpg';

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
        id: '001'
        // author: 'jill111',
    },
    {
        img: ProImage2,
        title: 'TheFabric',
        id: '002'
        // author: 'jill111',
    },
    {
        img: ProImage3,
        title: 'TheFabric',
        id: '003'
    },
    {
        img: ProImage4,
        title: 'TheFabric',
        id: '004'
    },
    {
        img: ProImage5,
        title: 'TheFabric',
        id: '005'
    },
    {
        img: ProImage6,
        title: 'TheFabric',
        id: '006'
    },
    {
        img: ProImage7,
        title: 'TheFabric',
        id: '007'
    },
    {
        img: ProImage8,
        title: 'TheFabric',
        id: '008'
    },
    {
        img: ProImage9,
        title: 'TheFabric',
        id: '009',
    },
    {
        img: ProImage10,
        title: 'TheFabric',
        id: '010'
    },


];

class JackWard extends Component {
    constructor(props) {
        super(props);
        this.stars = this.stars.bind(this);
        this.state={
            open: false
        }
    }
    stars = () => {
        console.log("Big Images");
        this.setState({ open: true });
        
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
                            title='Jackward'
                            style={{ borderRadius: '5px 5px 0 0', backgroundColor: '#b3b3b3' }}
                        />
                        <mat.CardText>
                            <div className='container-flux'>
                                <div style={styles.root}>
                                    <mat.GridList
                                        cols={3}
                                        cellHeight={'auto'}
                                        padding={2}
                                        style={styles.gridList}
                                        className='col-xs-12 col-md-11'
                                    >
                                        <mat.Subheader>August 2017</mat.Subheader>
                                        {tilesData.map((key) => (

                                            <mat.GridTile
                                                key={key.img}
                                                title={key.title}
                                                titleStyle={{ textAlign: 'left' }}
                                                actionIcon={
                                                    <mat.FlatButton
                                                        label='Open'
                                                        labelStyle={{ color: 'white' }}
                                                        onClick={this.stars}
                                                    />

                                                }
                                            >
                                                <img src={key.img} style={{ width: '100%' }} alt='' />
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
                            title="Feed Back"
                            actions={actions}
                            modal={false}
                            open={this.state.open}
                            onRequestClose={this.handleClose}
                        >
                            here is the big images
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

export default JackWard;