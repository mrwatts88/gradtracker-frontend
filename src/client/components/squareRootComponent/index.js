import React, { useState } from 'react';
import { connect } from 'react-redux'
import { executeSquare } from '../../redux/actions/mathematics_actions'

// const SquareComponent = (props) => {
//     const { squareResult, executeSquare } = props;
export const SquareComponent = ({ squareResult, executeSquare }) => {
    const [val1, setVal1] = useState('');
    return (
        <div id="squareRoot" className="card">
            <h3>Square Root:</h3>
            <div className="card-body">
                <div className="input-group">
                    <div className="input-group-2">
                    <input type="number" placeholder="Value" id="value1" value={val1} onChange={e => setVal1(e.target.value)} />
                </div>
                </div>
                <div className="input-group" />
                <div>
                    <button className="calc-button" disabled={!val1} onClick={() => executeSquare(val1)}>√</button>
                </div>
            </div>
            <div className="result-container">
                {squareResult && <p> The square root of {val1} = {squareResult.value}</p>}
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