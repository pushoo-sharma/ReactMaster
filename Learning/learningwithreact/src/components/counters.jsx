import React , {Component} from 'react';
import Counter from './counter';
class Counters extends Component {
    render(){
        return(
            <div>
                <button onClick = {this.props.handleReset}>
                Reset</button>
                {this.props.counters.map(counter => 
                <Counter key={counter.id}
                counter = {counter}
                onDelete = {this.props.onDelete}
                onIncrement = {this.props.onIncrement}>
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