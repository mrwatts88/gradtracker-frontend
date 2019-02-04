import React from 'react';
import { connect } from 'react-redux';
import { createConcatenation } from '../../redux/actions/concatenation_actions';

export class Concatenation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: '' };
    }
    render() {
        const { val1, val2 } = this.state;
        const { concatValue } = this.props;
        return (
            <div className="card">
                <h3>Concatenation:</h3>
                <div className="card-body">
                    <div className="input-group">
                        <label forhtml="value1">Value 1</label>
                        <input type="text" id="value1" value={val1} onChange={e => this.setState({ val1: e.target.value })} />
                    </div>
                    <div className="input-group">
                        <label forhtml="value1">Value 1</label>
                        <input type="text" id="value2" value={val2} onChange={e => this.setState({ val2: e.target.value })} />
                    </div>
                    <div className="submit-button">
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.props.createConcatenation(val1, val2)}>Concat</button>
                    </div>
                </div>
                <div className="result-container">
                    <p>{concatValue && `Result: ${concatValue}`}</p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        concatValue: state.concatenationReducer.concatValue
    };
};

export default connect(mapStateToProps, { createConcatenation })(Concatenation);
