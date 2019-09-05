import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeSubtraction } from '../../redux/actions/mathematics_actions';
import { CalculationInputFields } from '../../components/index';

export const SubtractComponent = ({ subtractResult, executeSubtraction }) => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');

    return (
        <div id="subtraction" className="card">
            <h3>Subtraction:</h3>
            <div className="card-body">
                <CalculationInputFields val1={val1} val2={val2} setVal1={setVal1} setVal2={setVal2} />
                <div className="input-group" />
                <button className="calc-button" disabled={!val1 || !val2} onClick={() => {
                    if (val2 !== 0) {
                        executeSubtraction(val1, val2);
                    }
                }}
                >-</button>
            </div>
            <div className="result-container">
                {subtractResult && <p> {val1} - {val2} = {subtractResult.value}</p>}
            </div>
        </div>
    );
};
// Mapping Redux state to local props
const mapStateToProps = state => {
    return {
        subtractResult: state.mathematicsReducer.subtractResult
    };
};

export default connect(mapStateToProps, { executeSubtraction })(SubtractComponent);
