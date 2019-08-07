import React from 'react';
import { connect } from 'react-redux';
import { executeAddition } from '../../redux/actions/mathematics_actions';

class AddComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: ''};
    }
    render() {
        const { val1, val2} = this.state;
        const { addResult } = this.props;
        return (
            <div id="addition" className="card">
                <h3>Addition:</h3>
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
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.props.executeAddition(val1, val2)}>+</button>
                    </div>
                </div>
                <div className="result-container">
                    {addResult && <p> {val1} + {val2} = {addResult.value}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        addResult: state.mathematicsReducer.addResult
    };
}

export default connect(mapStateToProps, { executeAddition })(AddComponent);