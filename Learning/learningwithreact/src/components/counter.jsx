import React,{Component} from 'react';
//import ReactDOM from 'react-dom';
export default class counter extends Component{
    state = {
        count : 0,
        tags : ['tag1','tag2','tag3'],
    };
    // {Using This we can make our code more efficient}
    // constructor(){
    //     super();
    //     this.handleEvent = this.handleEvent.bind(this);
    // }
    // handleEvent(){
    //     console.log("Button clicked",this);
    // }
    handleEvent = (product) => {
        console.log("Button clicked",product);
        this.setState({ count : this.state.count + 1})
        console.log(this.state.count);
    };
    dohandleEvent = () => {
        this.handleEvent({id : 1});
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
    renderTag(){
        if(this.state.length === 0) return <p>There are no Tags!</p>
        return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>
    }
    render(){
        return(
            <React.Fragment>
                <span style = {this.style} className={this.getClassesBadges()}>{this.formatCount()}</span>
                {/* {u can use in line style like style = {{fontSize : 40}}} */}
                <button onClick = {this.dohandleEvent}>Incerment</button>
                {/* {u have to pass refernce in onClick} */}
                <ul>
                    {this.state.tags.length === 0 && "Please enter some tag"}
                    {/* {Truthy and falsy technique} */}
                    {this.renderTag()}
                </ul>
            </React.Fragment>

        );
    }
    
}

//export default counter;