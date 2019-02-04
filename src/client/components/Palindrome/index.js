import React from 'react';
import { connect } from 'react-redux';
import { checkPalindrome } from '../../redux/actions/palindrome_actions';

export class Palindrome extends React.Component {
    constructor(props) {
        super(props);
        this.state = { val: '' };
    }
    render() {
        const { val } = this.state;
        const { isPalindrome } = this.props;
        return (
            <div className="card">
                <h3>Palindrome:</h3>
                <div className="card-body">
                    <div className="input-group">
                        <label forhtml="value">Enter the potential palindrome:</label>
                        <input type="text" id="value" value={val} onChange={e => this.setState({ val: e.target.value })} />
                    </div>
                    <div className="input-group" />
                    <div className="submit-button">
                        <button className="button" disabled={!val} onClick={() => this.props.checkPalindrome(val)}>CheckPalindrome</button>
                    </div>
                </div>
                <div className="result-container">
                    <p>{isPalindrome && `Result: ${isPalindrome}`}</p>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        isPalindrome: state.palindromeReducer.isPalindrome
    };
};

export default connect(mapStateToProps, { checkPalindrome })(Palindrome);
