import React, { Component } from 'react';
import * as mat from 'material-ui';
import Subscribe from '../Home/subscribe';
import FooterOfCollection from '../Home/footer';



const styles = {
    about: {
        backgroundColor: '#808080',

    },
    aboutCaontainer: {
        marginTop: 45,
        position: 'relative'
    }
}
class AboutNo1Collection extends Component {
    render() {
        return (
            <div>
                <div className='container' >
                    <div className='col-md-12' >
                        <mat.Card style={styles.aboutCaontainer}>
                            <mat.AppBar
                                titleStyle={{ textShadow: '0px 1px 2px black', fontWeight: 'bold' }}
                                title='About Us'
                                showMenuIconButton={false}
                                style={styles.about}
                            />
                            
                        </mat.Card>
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

export default AboutNo1Collection;