import React from 'react';
import { connect } from 'react-redux';

const Counter = ({ counter, dispatch }) => {
    const increment = () => {
        dispatch({ type: 'INCREMENT' });
    };

    const decrement = () => {
        dispatch({ type: 'DECREMENT' });
    };

    const incrementIfOdd = () => {
        if (counter % 2 !== 0) {
            dispatch({ type: 'INCREMENT' });
        }
    };

    const incrementAsync = () => {
        setTimeout(() => {
            dispatch({ type: 'INCREMENT' });
        }, 1000);
    };

    return (
        <div>
            <p>{counter}</p>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={incrementIfOdd}>Increment if odd</button>
            <button onClick={incrementAsync}>Increment async</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    counter: state
});

export default connect(mapStateToProps)(Counter);