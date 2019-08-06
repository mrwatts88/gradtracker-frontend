import React from 'react';
import axios from 'axios';

class SquareComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val1: '', result: undefined};
    }
    async squareRootingService() {
        const res = await axios.get(`/api/mathematics/squareRoot/${this.state.val1}/${this.state.val2}`);
        this.setState({result: res.data.value})
    }
    render() {
        const { val1, val2, result } = this.state;
        const { isPalindrome } = this.props;
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
                        <button className="button" disabled={!val1} onClick={() => this.squareRootingService()}>Square Root</button>
                    </div>
                </div>
                <div className="result-container">
                    {result && <p> The square root of {val1} = {result}</p>}
                </div>
            </div>
        )
    }
}



export default SquareComponent;