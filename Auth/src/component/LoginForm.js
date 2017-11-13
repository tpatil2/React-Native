import React, { Component } from 'react';
import { Button, Card ,CardSection ,Input } from './common';
import { Text } from 'react-native';
import firebase from 'firebase';

class LoginForm extends Component {

  state = { email: '', password: '', error: '' };


  onButtonPress() {
    const { email, password } = this.state;
    this.setState({ error: 'Button pressed' });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .catch(() => {
          this.setState({ error: 'Authentication Failed' });
        });
      });
    }


  render() {
      return (
        <Card>
          <CardSection>
            <Input
              label="Email"
              secureTextEntry={false}
              placeholder="user@email.com"
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
          </CardSection>

          <CardSection >
            <Input
              label="Password"
              secureTextEntry
              placeholder="*********"
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            <Button onPress={this.onButtonPress.bind(this)} >
              Log in
            </Button>
          </CardSection>

        </Card>
      );
  }
}


const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

export default LoginForm;
