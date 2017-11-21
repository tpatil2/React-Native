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
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
            />
          </CardSection>

          <CardSection>
            <Input
            label="Phone"
            placeholder="***-***-****"
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
            />
          </CardSection>

          <CardSection>
            <Button>
              Create
            </Button>
          </CardSection>
        </Card>
      );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);
