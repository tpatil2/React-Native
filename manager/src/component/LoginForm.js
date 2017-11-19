import React, { Component } from 'react';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Card, CardSection, Input, Button } from './common';


class LoginForm extends Component {

  onEmailChanged(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
   this.props.passwordChanged(text);
 }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='Enter Email'
            onChangeText={this.onEmailChanged.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Enter Password'
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    email: state.auth.email,
    password: state.auth.password
   };
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
