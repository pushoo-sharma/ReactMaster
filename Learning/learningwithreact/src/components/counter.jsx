import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
export default class counter extends Component{
    state = {
        count : 0,
    };
    style = {
        fontSize : 40,
    };
    getClassesBadges() {
        let classes = "text-";
        classes += this.state.count === 0 ? "success m-2" : "info m-2";
        return classes;
    }

    formatCount(){
        var {count} = this.state;
        return (count === 0 ? "zero" : "one");
    }
    render(){
        return(
            <React.Fragment>
                <span style = {this.style} className={this.getClassesBadges()}>{this.formatCount()}</span>
                {/* {u can use in line style like style = {{fontSize : 40}}} */}
                <button>Increment</button>
            </React.Fragment>

        );
    }
    
}

//export default counter;