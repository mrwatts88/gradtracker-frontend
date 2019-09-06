import React, { useState } from 'react';
import { connect } from 'react-redux';
import { executeDivision } from '../../redux/actions/mathematics_actions';
import { CalculationInputFields } from '../../components/index';

export const DivideComponent = props => {
    const [val1, setVal1] = useState('');
    const [val2, setVal2] = useState('');
    const { divideResult } = props;

    return (
        <div id="division" className="card">
            <h3>Division:</h3>
            <div className="card-body">
                <CalculationInputFields val1={val1} val2={val2} setVal1={setVal1} setVal2={setVal2} />
                <div className="input-group" />
                <button className="calc-button" disabled={!val1 || !val2} onClick={() => {
                    if (val2 !== 0) {
                        props.executeDivision(val1, val2);
                    }
                }}
                >÷</button>
            </div>
            <div className="result-container">
                {divideResult && <p> {val1} ÷ {val2} = {divideResult.value}</p>}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        divideResult: state.mathematicsReducer.divideResult
    };
};

export default connect(mapStateToProps, { executeDivision })(DivideComponent);
