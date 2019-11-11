import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { authenticate} from '../../redux/actions/authActions';
import { Form, Icon, Input, Button } from 'antd';
// import { dispatchType } from '../../redux/actions/commonActions';

class CreateMilestone extends Component {
  /*
  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_POST_MILESTONE_STATUS);
  }
*/
  handleSubmit = () => {

  };

  render() {
    return (
      <div style={{ display: 'flex', marginBottom: '15px' }}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            <Input prefix={<Icon type="compass" />} placeholder="Milestone Name" />
          </Form.Item>
          <Form.Item>
            <Input prefix={<Icon type="file-text" />} type="text" placeholder="Description" />
          </Form.Item>
          <Form.Item style={{ marginBottom: '0' }}>
            <Button type="primary" htmlType="submit" className="milestone-form__button">
              Create Milestone
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
};

/*

const mapStateToProps = ({ mileReducer }) => ({
  mileError: mileReducer.errorMessage,
  authenticateStatus: mileReducer.authenticateStatus,
});

export default connect(mapStateToProps, { authenticate, dispatchType })(CreateMilestone);
*/

export default CreateMilestone;
