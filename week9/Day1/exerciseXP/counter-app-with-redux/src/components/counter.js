import React from 'react';
import { connect } from 'react-redux';
import { INCREASE_COUNT, DECREASE_COUNT } from '../actions';

function Counter({ count, dispatch }) {
    return (
        <div>
            <button onClick={() => dispatch({ type: DECREASE_COUNT })}>-</button>
            <span>{count}</span>
            <button onClick={() => dispatch({ type: INCREASE_COUNT })}>+</button>
        </div>
    );
}

const mapStateToProps = state => ({
    count: state.count
});

export default connect(mapStateToProps)(Counter);