import React from 'react';
import { connect } from 'react-redux'
import { executeSquare } from '../../redux/actions/mathematics_actions'

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: ''};
    }
    render() {
        const { val1 } = this.state;
        const { squareResult } = this.props;
        return (
            <div id="multiplication" className="card">
                <h3>Square Root:</h3>
                <div className="card-body">
                    <div className="input-group">
                        <div className="input-group">
                        <label forhtml="value1">Value 1</label>
                        <input type="number" id="value1" value={val1} onChange={e => this.setState({ val1: e.target.value })} />
                    </div>
                    </div>
                    <div className="input-group" />
                    <div className="submit-button">
                        <button className="button" disabled={!val1} onClick={() => this.props.executeSquare(val1)}>Square Root</button>
                    </div>
                </div>
                <div className="result-container">
                    {squareResult && <p> The square root of {val1} = {squareResult.value}</p>}
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        squareResult: state.mathematicsReducer.squareResult
    };
}

export default connect(mapStateToProps, { executeSquare })(SquareComponent);