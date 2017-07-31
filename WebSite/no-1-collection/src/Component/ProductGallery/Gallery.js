import React, { Component } from 'react';
import * as mat from 'material-ui';

const styles = {
    gallery: {
        marginTop: 50,

    }
}


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
                                <section>
                                    <div className='row'>
                                        <div className='col-lg-4'>
                                            <blockquote style={{border: 'none'}}> 
                                                <img src="" alt="product"/>
                                            </blockquote>
                                        </div>
                                    </div>
                                </section>
                            </div>
                        </mat.CardText>
                    </mat.Card>
                </div>
            </div>
        );
    }
}

export default ProductGallery;