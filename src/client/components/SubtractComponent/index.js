import React from 'react';
import { connect } from 'react-redux'
import { executeSubtraction } from '../../redux/actions/mathematics_actions'

class SubtractComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: ''};
    }
    render() {
        const { val1, val2} = this.state;
        const { subtractResult } = this.props;
        return (
            <div id="subtraction" className="card">
                <h3>Subtraction:</h3>
                <div className="card-body">
                    <div className="input-group">
                        <div className="input-group">
                        <label forhtml="value1">Value 1</label>
                        <input type="number" id="value1" value={val1} onChange={e => this.setState({ val1: e.target.value })} />
                    </div>
                    <div className="input-group">
                        <label forhtml="value2">Value 2</label>
                        <input type="number" id="value2" value={val2} onChange={e => this.setState({ val2: e.target.value })} />
                    </div>
                    </div>
                    <div className="input-group" />
                    <div className="submit-button">
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.props.executeSubtraction(val1, val2)}>-</button>
                    </div>
                </div>
                <div className="result-container">
                    {subtractResult && <p> {val1} - {val2} = {subtractResult.value}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        subtractResult: state.mathematicsReducer.subtractResult
    };
}

export default connect(mapStateToProps, { executeSubtraction })(SubtractComponent);