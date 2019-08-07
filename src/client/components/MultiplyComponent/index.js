import React from 'react';
import { connect } from 'react-redux';
import { executeMultiplication } from '../../redux/actions/mathematics_actions'

class MultiplyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: ''};
    }
    render() {
        const { val1, val2} = this.state;
        const { multiplyResult } = this.props;
        return (
            <div id="multiplication" className="card">
                <h3>Multiplication:</h3>
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
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.props.executeMultiplication(val1, val2)}>x</button>
                    </div>
                </div>
                <div className="result-container">
                    {multiplyResult && <p> {val1} x {val2} = {multiplyResult.value}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        multiplyResult: state.mathematicsReducer.multiplyResult
    };
}

export default connect(mapStateToProps, { executeMultiplication })(MultiplyComponent);