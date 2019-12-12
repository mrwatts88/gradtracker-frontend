import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authenticate } from '../../redux/actions/authActions';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { dispatchType } from '../../redux/actions/commonActions';
import {
  postMilestone,
  deleteMilestone,
  getAllMilestones,
  CLEAR_POST_MILESTONE_STATUS,
  POST_MILESTONE,
  POST_MILESTONE_SUCCESS,
  POST_MILESTONE_ERROR
} from '../../redux/actions/milestoneActions';

export class C extends Component {
  state = {
    milestones: { id: 0 },
  };

  componentDidMount = () => this.props.getAllMilestones();

  componentWillUnmount = () => {
    this.props.dispatchType(CLEAR_POST_MILESTONE_STATUS);
  }

  postMilestone = e => {
    e.preventDefault();
    this.props.form.validateFields((err, { name, description }) => {
      if (err) return;

      let existing = [];

      if (this.props.milestones && this.props.milestones.degreeProgramStates) {
        existing = this.props.milestones.degreeProgramStates || [];
      }

      const degreeProgram = {
        name: 'todo',
        description: 'todo',
        degreeProgramStates: [{
          degreeProgramId: 1,
          name,
          description,
        }, ...existing]
      };

      this.props
        .postMilestone(1, degreeProgram)
        .then(() => this.props.getAllMilestones())
        .then(this.props.form.resetFields());
    });
  };

  deleteMilestone = id => {
    let existing = [];

    if (this.props.milestones && this.props.milestones.degreeProgramStates) {
      existing = this.props.milestones.degreeProgramStates || [];
    }

    existing = existing.filter(milestone => milestone.id !== id);

    const degreeProgram = {
      name: 'todo',
      description: 'todo',
      degreeProgramStates: existing
    };

    this.props
      .postMilestone(1, degreeProgram)
      .then(() => this.props.getAllMilestones())
      .then(this.props.form.resetFields());
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    return (
      <div id="create-milestone">
        <Row>
          <Col
            style={{
              paddingBottom: '5px',
              marginBottom: '5px'
            }}
            xs={{ offset: 0, span: 24 }}
            md={{ offset: 3, span: 18 }}
            lg={{ offset: 6, span: 12 }}
          >
            <Form onSubmit={this.postMilestone}>
              <Form.Item>
                {getFieldDecorator('name', {
                  initialValue: '',
                  rules: [
                    { required: true, message: `Name required.` }
                  ]
                })(<Input
                  // onChange={this.onTextInputChange}
                  name="name"
                  type="text"
                  prefix={<Icon type="compass" />}
                  placeholder="Milestone Name"
                // value={this.state.name}
                />)}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('description', {
                  initialValue: '',
                  rules: [
                    { required: true, message: `Description required.` }
                  ]
                })(<Input
                  // onChange={this.onTextInputChange}
                  name="description"
                  prefix={<Icon type="file-text" />}
                  type="text"
                  placeholder="Description"
                // value={this.state.description}
                />)}

              </Form.Item>
              <Form.Item style={{ marginBottom: '0' }}>
                <Button
                  loading={this.props.postMilestoneStatus === POST_MILESTONE}
                  type="primary"
                  htmlType="submit"
                  onClick={this.postMilestone}
                  style={{ width: '100%' }}
                  className="milestone-form__button">
                  Create Milestone
                </Button>
              </Form.Item>
            </Form>
            {this.props.postMilestoneStatus === POST_MILESTONE_ERROR && this.props.milestoneError}
            {this.props.postMilestoneStatus === POST_MILESTONE_SUCCESS && 'milestone created.'}
          </Col>
        </Row>
        <Row gutter={24}>
          <Col xs={{ offset: 0, span: 24 }} md={{ offset: 3, span: 18 }} lg={{ offset: 6, span: 12 }}>
            {this.props.milestones &&
              (this.props.milestones.degreeProgramStates || []).sort((a, b) => a.name - b.name).map(milestone => {
                return (
                  <div key={milestone.id} id={`${milestone.name}-${milestone.id}`}>
                    <Icon
                      type="close-circle"
                      onClick={() => this.deleteMilestone(milestone.id)}
                      style={{
                        float: 'right',
                        lineHeight: 2.0,
                        fontSize: '19px',
                        color: 'red',
                        marginLeft: '9px'
                      }}
                    />
                    <div style={{ fontWeight: 'bold' }}>{milestone.name}</div>
                    <div>{milestone.description}</div>
                  </div>
                );
              })}
          </Col>
        </Row>
      </div >
    );
  }
}

export const CreateMilestone = Form.create({ name: 'milestone_form' })(C);

const mapStateToProps = ({ milestoneReducer }) => ({
  milestoneError: milestoneReducer.errorMessage,
  authenticateStatus: milestoneReducer.authenticateStatus,
  milestones: milestoneReducer.milestones,
});

export default connect(mapStateToProps,
  {
    authenticate,
    postMilestone,
    deleteMilestone,
    dispatchType,
    getAllMilestones
  })(CreateMilestone);
