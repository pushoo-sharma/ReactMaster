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
    onIncrement = counter =>{
        const newcounter = [...this.state.counters];
        const index = newcounter.indexOf(counter);
        // newcounter[0].value++;
        // incrementing the value of counter is no no in react
        newcounter[index] = {...counter};
        newcounter[index].value++;
        // console.log(this.state.counters[index]);
        this.setState({counters : newcounter});
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
                onDelete = {this.handleDelete}
                onIncrement = {this.onIncrement}>
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