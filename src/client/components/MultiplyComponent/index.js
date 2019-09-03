import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeMultiplication } from '../../redux/actions/mathematics_actions';

export const MultiplyComponent = ({ multiplyResult, executeMultiplication }) => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [showResult, setShowResult] = useState(false);
    return (
        <div id="multiplication" className="card">
            <h3>Multiplication:</h3>
            <div className="card-body">
                <div className="input-group-2">
                    <div className="input-group-2">
                        <input placeholder="Value 1" type="number" id="value1" value={val1} onChange={(e) => {
                            setVal1(e.target.value);
                            setShowResult(false);
                        }} />
                    </div>
                    <div className="input-group-2">
                        <input placeholder="Value 2" type="number" id="value2" value={val2} onChange={(e) => {
                            setVal2(e.target.value);
                            setShowResult(false);
                        }} />
                    </div>
                </div>
                <div className="input-group" />
                <div>
                    <button className="calc-button" disabled={!val1 || !val2} onClick={() => {
                        if (val2 !== 0) {
                            executeMultiplication(val1, val2);
                            setShowResult(true);
                        }
                    }}
                    >x</button>
                </div>
            </div>
            <div className="result-container">
                {multiplyResult && showResult && <p> {val1} x {val2} = {multiplyResult.value}</p>}
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
