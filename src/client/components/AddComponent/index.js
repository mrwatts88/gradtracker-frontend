import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeAddition } from '../../redux/actions/mathematics_actions';

export const AddComponent = ({ addResult, executeAddition }) => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const [showResult, setShowResult] = useState(false);
    return (
        <div id="Addition" className="card">
            <h3>Addition:</h3>
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
                            executeAddition(val1, val2);
                            setShowResult(true);
                        }
                    }}
                    >+</button>
                </div>
            </div>
            <div className="result-container">
                {addResult && showResult && <p> {val1} + {val2} = {addResult.value}</p>}
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
