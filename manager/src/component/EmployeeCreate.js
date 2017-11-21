import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from './common';
import { employeeUpdate } from '../actions';

class EmployeeCreate extends Component {

  render() {
      return (
        <Card>
          <CardSection>
            <Input
            label="name"
            placeholder="Enter your name"
            />
          </CardSection>

          <CardSection>
            <Input
            label="Phone"
            placeholder="***-***-****"
            />
          </CardSection>

          <CardSection>
            <Button
              Create
            />
          </CardSection>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(null, { employeeUpdate})(EmployeeCreate);
