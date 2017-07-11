import React, { Component } from 'react';
import * as mat from 'material-ui';
import MdMenu from 'react-icons/lib/md/menu';


const styles = {
    title: {
        cursor: 'pointer',
    },
    MdMenu: {
        width: 36,
        height: 36,
        color: '#f8fdfa',
    },
    small: {
        width: 40,
        height: 40,
        padding: 5
        
    }
};
class MyApp extends Component {

    handleToggle() {
        alert('onTouchTap triggered on the title component');
    }
    render() {
        return (
            <div className="container-flux">
                <mat.AppBar
                    title={<span style={styles.title}>No.1 Collection</span>}
                    iconElementLeft={
                        <mat.IconButton
                            iconStyle={styles.MdMenu}
                            style={styles.small}
                        >
                            <MdMenu

                                onClick={this.handleToggle.bind(this)}
                            />
                        </mat.IconButton>
                    }
                    iconElementRight={<mat.FlatButton label="Save" />}
                />
            </div>
        );
    }
};

export default MyApp;