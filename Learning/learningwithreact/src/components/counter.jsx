import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
export default class counter extends Component{
    state = {
        count : 0
    };
    render(){
        return(
            <React.Fragment>
                <span>{this.formatCount()}</span>
                <button>Increment</button>
            </React.Fragment>

        );
    }
    formatCount(){
        var {count} = this.state;
        return (count === 0 ? "zero" : "no");
    }
}

//export default counter;