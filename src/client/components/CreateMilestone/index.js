import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../redux/actions/authActions';
import { Form, Icon, Input, Button } from 'antd';
import { dispatchType } from '../../redux/actions/commonActions';
import {
  postMilestone,
  CLEAR_POST_MILESTONE_STATUS,
  POST_MILESTONE,
  POST_MILESTONE_SUCCESS,
  POST_MILESTONE_ERROR
} from '../../redux/actions/milestoneActions';

class CreateMilestone extends Component {
  state = {

  };

  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_POST_MILESTONE_STATUS);
  }

  postMilestone = e => {
    e.preventDefault();

    this.props
      .postMilestone({ name: this.state.formName, description: this.state.formDescription })
      .then(() => {
        this.setState({ formName: '', formDescription: '' });
      });
  };

  onTextInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <Form onSubmit={this.postMilestone} className="login-form">
          <Form.Item>
            <Input
              onChange={this.onTextInputChange}
              name="formName"
              type="text"
              prefix={<Icon type="compass" />}
              placeholder="Milestone Name"
              value={this.state.formName}/>
          </Form.Item>
          <Form.Item>
            <Input
              onChange={this.onTextInputChange}
              name="formDescription"
              prefix={<Icon type="file-text" />}
              type="text"
              placeholder="Description"
              value={this.state.formDescription}/>
          </Form.Item>
          <Form.Item style={{ marginBottom: '0' }}>
            <Button
              loading={this.props.postMilestoneStatus === POST_MILESTONE}
              type="primary"
              htmlType="submit"
              onClick={this.postMilestone}
              className="milestone-form__button">
              Create Milestone
            </Button>
          </Form.Item>
        </Form>
        {this.props.postMilestoneStatus === POST_MILESTONE_ERROR && this.props.milestoneError}
        {this.props.postMilestoneStatus === POST_MILESTONE_SUCCESS && 'milestone created.'}
      </div>
    );
  }
};

const mapStateToProps = ({ milestoneReducer }) => ({
  milestoneError: milestoneReducer.errorMessage,
  authenticateStatus: milestoneReducer.authenticateStatus,
});

export default connect(mapStateToProps, { authenticate, postMilestone, dispatchType })(CreateMilestone);
