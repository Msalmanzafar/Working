import React,{Component} from 'react';
import * as mat from 'material-ui'

const styles={
    FebricHome:{
        marginTop: 50
    }
}
class FebricHome extends Component{
    render(){
        return(
            <div>
                <div className='container' style={styles.FebricHome}>
                    <mat.Card>
                        <mat.Paper zDepth={2}>
                            <mat.AppBar
                                showMenuIconButton={false}
                                style={{backgroundColor: 'lightgray'}}
                                iconElementRight={
                                    <div style={{width: 300, float: 'left'}}>
                                        <mat.TextField
                                            hintText="Search"
                                            fullWidth={'70%'}
                                        />
                                        <mat.FlatButton
                                            label='Search'
                                        />
                                    </div>
                                }
                            />
                        </mat.Paper>
                    </mat.Card>
                </div>
            </div>
        );
    }
}


export default FebricHome;