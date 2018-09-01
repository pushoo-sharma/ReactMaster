import React , {Component} from 'react';
class Navbar extends Component{
    render(){
        return(
            <div>
                <h4>navbar</h4>
                <h4></h4>
                <h4>{this.props.totalCounter}</h4>
                <h4></h4>
            </div>
        );
    }
}
export default Navbar;