import React, { Component } from 'react';
import * as mat from 'material-ui';
import BigSale from '../Images/49-512.png'


const style = {
    height: 'auto',
    width: '30%',
    margin: 10,
    textAlign: 'center',
    display: 'inline-block',
};

class Sales extends Component {
    render() {
        return (
            <div>
                <div className='container' style={{ marginTop: 20, marginBottom: 20 }}>
                    <div className="col-xs-12 col-md-12 text-center">

                        <mat.Paper style={style} zDepth={2} >
                            <img src={BigSale} alt="demo" style={{ width: '50%', height: 'auto' }} />
                        </mat.Paper>
                         <mat.Paper style={style} zDepth={2} >
                            <img src={BigSale} alt="demo" style={{ width: '50%', height: 'auto' }} />
                        </mat.Paper> 
                        <mat.Paper style={style} zDepth={2} >
                            <img src={BigSale} alt="demo" style={{ width: '50%', height: 'auto' }} />
                        </mat.Paper> 
                        <mat.Paper style={style} zDepth={2} >
                            <img src={BigSale} alt="demo" style={{ width: '50%', height: 'auto' }} />
                        </mat.Paper>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sales;