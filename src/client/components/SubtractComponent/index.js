import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeSubtraction } from '../../redux/actions/mathematics_actions'

export const SubtractComponent = ({ subtractResult, executeSubtraction }) => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
        return (
            <div id="subtraction" className="card">
                <h3>Subtraction:</h3>
                <div className="card-body">
                    <div className="input-group-2">
                        <div className="input-group-2">
                            <input placeholder="Value 1" type="number" id="value1" value={val1} onChange={e => setVal1(e.target.value)} />
                        </div>
                        <div className="input-group-2">
                            <input placeholder="Value 2" type="number" id="value2" value={val2} onChange={e => setVal2(e.target.value)} />
                        </div>
                    </div>
                    <div className="input-group" />
                    <div>
                        <button className="calc-button" disabled={!val1 || !val2} onClick={() => executeSubtraction(val1, val2)}>-</button>
                    </div>
                </div>
                <div className="result-container">
                    {subtractResult && <p> {val1} - {val2} = {subtractResult.value}</p>}
                </div>
            </div>
        )
}
const mapStateToProps = state => {
    return {
        subtractResult: state.mathematicsReducer.subtractResult
    };
}

export default connect(mapStateToProps, { executeSubtraction })(SubtractComponent);