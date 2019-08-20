import React from 'react';
import { connect } from 'react-redux';
import { deleteError } from '../../redux/actions/error_actions';

export const ShowError = props => {
    if (props.error) {
        return (
            <div className='error-body'>
                <span className='error-close' onClick={() => props.deleteError()}>X</span>
                <h1>Warning</h1>
                <p>{props.error.toString()}</p>
            </div>
        );
    } else return null;
};

export default connect(null, { deleteError })(ShowError);
