import React, {Component} from 'react'
import './Counter.css'
import CounterButton from '../../../Counter/src/components/CounterButton'

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }

    render() {
        return (
            <div className="counter">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div><button onClick={this.reset} className="reset">RESET</button></div>
            </div>
        );
    }

    increment (by) {

        //another way of setting state using previous state
        this.setState(
            (prevState) => {
                return { counter: prevState.counter + by }
            }
        )
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return { counter: prevState.counter - by }
            }
        )
    }

    reset() {
        this.setState({
            counter: 0
        })
    }
}

export default Counter
