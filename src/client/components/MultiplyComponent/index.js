import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeMultiplication } from '../../redux/actions/mathematics_actions';
import { CalculationInputFields } from '../../components/index';

export const MultiplyComponent = ({ multiplyResult, executeMultiplication }) => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');

    return (
        <div id="multiplication" className="card">
            <h3>Multiplication:</h3>
            <div className="card-body">
                <CalculationInputFields val1={val1} val2={val2} setVal1={setVal1} setVal2={setVal2} />
                <div className="input-group" />
                <button className="calc-button" disabled={!val1 || !val2} onClick={() => {
                    if (val2 !== 0) {
                        executeMultiplication(val1, val2);
                    }
                }}
                >x</button>
            </div>
            <div className="result-container">
                {multiplyResult && <p> {val1} x {val2} = {multiplyResult.value}</p>}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        multiplyResult: state.mathematicsReducer.multiplyResult
    };
};

export default connect(mapStateToProps, { executeMultiplication })(MultiplyComponent);
