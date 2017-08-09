import React,{Component} from 'react';
import NavBarFebric from './Navigation/navbar'


class TheFebricStore extends Component{
    render(){
        return(
            <div>
                <NavBarFebric/>
                {this.props.children}
            </div>
        );
    }
};

export default TheFebricStore;