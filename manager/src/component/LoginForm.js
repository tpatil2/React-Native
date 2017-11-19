import React, { Component } from 'react';
import { Card, CardSection, Input, Button}  from './common';


class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email'
            placeholder='Enter Email'
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label='Password'
            placeholder='Enter Password'
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

export default LoginForm;
