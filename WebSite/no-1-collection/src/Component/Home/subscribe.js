import React, { Component } from 'react';
import * as mat from 'material-ui';
import Logo from '../Images/no1Collection.png';
import FaApple from 'react-icons/lib/fa/apple';
import FaAndroid from 'react-icons/lib/fa/android';


const style = {
    height: 'auto',
    width: 130,
    margin: '5% 0% 5% 2% ',
    // float: 'right',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#d9d9d9',
    boxShadow: 'hidden',
    // border: '2px solid blue',
    paddingTop: 18,
    // paddingBottom: 15
};
const style2 = {
    height: 'auto',
    width: 320,
    margin: '5% 0% 5% 0% ',
    textAlign: 'center',
    display: 'inline-block',
    backgroundColor: '#d9d9d9',
    boxShadow: 'hidden',
    // border: '2px solid blue'
};
const style3 = {
    height: 'auto',
    width: '38%',
    margin: '5% 0% 5% 5% ',
    textAlign: 'center',
    display: 'inline-block',
    // float: 'right',
    backgroundColor: '#d9d9d9',
    boxShadow: 'hidden',
    // border: '2px solid blue'

}
const styles = {
    box: {
        backgroundColor: '#d9d9d9',
        height: 'auto',

    },
    box1: {
        height: 'auto',
        width: 150,
        textAlign: 'center',
        display: 'inline-block',
        backgroundColor: '#d9d9d9',
        boxShadow: 'hidden',
        border: '2px solid blue',
        position: 'relative',
    },
    logos: {
        width: 110,
        height: 110,
        marginTop: -16
    },
    box2: {
        height: 'auto',
        width: 310,
        textAlign: 'left',
        display: 'inline-block',
        backgroundColor: '#d9d9d9',
        boxShadow: 'hidden',
        border: '2px solid blue',
        position: 'relative',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#808080'
    },
    info: {
        fontSize: 15,
        color: '#808080'
    },
    download: {
        margin: 8,
    },
    subs: {
        fontSize: 12,
        fontWeight: 'bold',
        // lineHeight: 0.4
    },
    subInput:{
        float: 'left',
        // marginTop: -22,
        // fontSize: 14
    }
}
class Subscribe extends Component {
    render() {
        return (
            <div>
                <div className="container-flux text-center" style={styles.box}>
                    <mat.Paper style={style}  >
                        <img src={Logo} alt="LOGO" style={styles.logos} />

                    </mat.Paper>
                    <mat.Paper style={style2}  >
                        <sapn style={styles.heading}>
                            Shop with No1Collection on the go!
                            </sapn><br />
                        <span style={styles.info}>
                            More Deals, Faster Access, Better Shopping!
                            </span><br />
                        <mat.RaisedButton secondary={true} label="FREE DOWNLOAD" style={styles.download} />
                        <FaApple style={{ width: 35, height: 35, color: 'gray', marginLeft: 10, cursor: 'pointer' }} />
                        <FaAndroid style={{ width: 35, height: 35, color: 'gray', marginLeft: 10, cursor: 'pointer' }} />
                    </mat.Paper>

                    {/*for Subscribe  */}

                    <mat.Paper style={style3}  >
                        <span style={styles.subs}>
                            Subscribe to our newsletter to receive special offers and latest Events.
                        </span><br />
                        <mat.TextField
                            hintText="your email here "
                            floatingLabelText="Email"
                            type='email'
                            style={styles.subInput}
                        /><br />
                        <mat.RaisedButton primary={true} label='Subscribe'/>
                    </mat.Paper>

                </div>
            </div>
        );
    }
}

export default Subscribe;