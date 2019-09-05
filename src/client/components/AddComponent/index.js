import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeAddition } from '../../redux/actions/mathematics_actions';
import { CalculationInputFields } from '../../components/index';

export const AddComponent = props => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const { addResult } = props;

    return (
        <div id="Addition" className="card">
            <h3>Addition:</h3>
            <div className="card-body">
                <CalculationInputFields val1={val1} val2={val2} setVal1={setVal1} setVal2={setVal2} />
                <div className="input-group" />
                <button className="calc-button" disabled={!val1 || !val2} onClick={() => props.executeAddition(val1, val2)}
                >+</button>
            </div>
            <div className="result-container">
                {addResult && <p> {val1} + {val2} = {addResult.value}</p>}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        addResult: state.mathematicsReducer.addResult
    };
};

export default connect(mapStateToProps, { executeAddition })(AddComponent);
