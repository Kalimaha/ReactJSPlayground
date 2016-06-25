import React, { Component, PropTypes } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        const { currentValue, onIncrement } = this.props
        return (
            <div>
                <button onClick={onIncrement}>
                    INCREASE
                </button>
                <p> {currentValue} </p>
                <button> DECREASE </button>
            </div>
        )
    }

}

Counter.propTypes = {
    currentValue: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired
}

export default Counter
