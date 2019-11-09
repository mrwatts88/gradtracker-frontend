/*
import React from 'react';
import { connect } from 'react-redux';
// import { authenticate, MILESTONE_ERROR, CLEAR_POST_MILESTONE_STATUS } from '../../redux/actions/mileActions';
import { Form, Icon, Input, Button } from 'antd';
import { dispatchType } from '../../redux/actions/commonActions';

export class M extends React.Component {
  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_POST_MILESTONE_STATUS);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator('milestone name', {
            rules: [{ required: true, message: 'Please input a name for the milestone.' }],
          })(<Input prefix={<Icon type="mail" />} placeholder="Email" />)}
        </Form.Item>
        <Form.Item>
          <Input prefix={<Icon type="compass" />} type="text" placeholder="Description" />
        </Form.Item>
        <Form.Item style={{ marginBottom: '0' }}>
          <Button type="primary" htmlType="submit" className="milestone-form__button">
            Submit
          </Button>
        </Form.Item>
        {this.props.milestoneStatus === MILESTONE_ERROR && <div className="error">{this.props.mileError}</div>}
      </Form>
    );
  }
};

export const CreateMilestone = Form.create({ name: 'milestones_form' })(M);

const mapStateToProps = ({ mileReducer }) => ({
  mileError: mileReducer.errorMessage,
  authenticateStatus: mileReducer.authenticateStatus,
});

export default connect(mapStateToProps, { authenticate, dispatchType })(CreateMilestone);
*/
