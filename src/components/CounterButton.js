import React, {Component} from "react";
import PropTypes from 'prop-types'


export default class CounterButton extends Component {

    //main
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)} > -{this.props.by}</button>
            </div>
        )
    }
}

//to assign default props
CounterButton.defaultProps = {
    by: 1
}

//to warn if the type is wrong
CounterButton.propTypes = {
    by: PropTypes.number
}