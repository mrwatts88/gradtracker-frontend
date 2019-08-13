import React, { useState } from 'react';
import { connect } from 'react-redux'
import { executeSquare } from '../../redux/actions/mathematics_actions'

// const SquareComponent = (props) => {
//     const { squareResult, executeSquare } = props;
export const SquareComponent = ({ squareResult, executeSquare }) => {
    const [val1, setVal1] = useState('');
    const [showResult, setShowResult] = useState(false);
    return (
        <div id="squareRoot" className="card">
            <h3>Square Root:</h3>
            <div className="card-body">
                <div className="input-group">
                    <div className="input-group-2">
                        <input placeholder="Value 1" type="number" id="value1" value={val1} onChange={(e) => {
                            setVal1(e.target.value);
                            setShowResult(false);
                        }} />
                    </div>
                </div>
                <div className="input-group" />
                <div>
                    <button className="calc-button" disabled={!val1} onClick={() => {
                        if (val1 >= 0) {
                            executeSquare(val1);
                            setShowResult(true);
                        }
                    }}
                    >√</button>
                </div>
            </div>
            <div className="result-container">
                {squareResult && showResult && <p> The square root of {val1} = {squareResult.value}</p>}
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        squareResult: state.mathematicsReducer.squareResult
    };
}

export default connect(mapStateToProps, { executeSquare })(SquareComponent);