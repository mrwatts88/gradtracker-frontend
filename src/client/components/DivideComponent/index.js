import React from 'react';
import { connect } from 'react-redux'
import { executeDivision } from "../../redux/actions/mathematics_actions"

class DivideComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: ''};
    }
    render() {
        const { val1, val2} = this.state;
        const { divideResult } = this.props;
        return (
            <div id="multiplication" className="card">
                <h3>Division:</h3>
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
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.props.executeDivision(val1, val2)}>÷</button>
                    </div>
                </div>
                <div className="result-container">
                    {divideResult && <p> {val1} ÷ {val2} = {divideResult.value}</p>}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        divideResult: state.mathematicsReducer.divideResult
    };
}

export default connect(mapStateToProps, { executeDivision })(DivideComponent);