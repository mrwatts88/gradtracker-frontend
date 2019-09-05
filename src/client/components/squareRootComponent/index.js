import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeSquare } from '../../redux/actions/mathematics_actions';

export const SquareRootComponent = props => {
    const [val1, setVal1] = useState('');
    const { squareResult, executeSquare } = props;

    return (
        <div id="squareRoot" className="card">
            <h3>Square Root:</h3>
            <div className="card-body">
                <div className="input-group-2">
                    <input placeholder="Value 1" type="number" id="value1" value={val1} onChange={(e) => {
                        setVal1(e.target.value);
                    }} />
                </div>
                <div className="input-group" />
                <button className="calc-button" disabled={!val1} onClick={() => {
                    if (val1 >= 0) {
                        executeSquare(val1);
                    }
                }}
                >√</button>
            </div>
            <div className="result-container">
                {squareResult && <p> The square root of {val1} = {squareResult.value}</p>}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        squareResult: state.mathematicsReducer.squareResult
    };
};

export default connect(mapStateToProps, { executeSquare })(SquareRootComponent);
