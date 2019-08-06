import React from 'react';
import axios from 'axios';

class DivideComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', val2: '', result: undefined};
    }
    async dividingService() {
        const res = await axios.get(`/api/mathematics/divide/${this.state.val1}/${this.state.val2}`);
        this.setState({result: res.data.value})
    }
    render() {
        const { val1, val2, result } = this.state;
        const { isPalindrome } = this.props;
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
                        <button className="button" disabled={!val1 || !val2} onClick={() => this.dividingService()}>÷</button>
                    </div>
                </div>
                <div className="result-container">
                    {result && <p> {val1} ÷ {val2} = {result}</p>}
                </div>
            </div>
        )
    }
}



export default DivideComponent;