import React , {Component} from 'react';
import Counter from './counter';
class Counters extends Component {
    state = {
        counters : [
            {id : 1,value : 4},
            {id : 2,value : 0},
            {id : 3,value : 0}
        ]
    };
    handleDelete = counterid =>{
        // console.log("Handle Delete invoked ",counterid)
        const newcounters = this.state.counters.filter( c => c.id !== counterid);
        this.setState({counters : newcounters});
    };
    handleReset = () =>{
        const setcounter = this.state.counters.map( id => {id.value = 0;
        return id});
        this.setState({counters : setcounter});
    };
    render(){
        return(
            <div>
                <button onClick = {this.handleReset}>
                Reset</button>
                {this.state.counters.map(counter => 
                <Counter key={counter.id}
                counter = {counter}
                onDelete = {this.handleDelete}>
                {/* value = {counter.value}
                id = {counter.id} 
                selected = {true}>
                even u can pass id = {counter.id} */}
                <h4>ID :{counter.id}</h4>
                </Counter>)}
            </div>
        );
    }
}
export default Counters;