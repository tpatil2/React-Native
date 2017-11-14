import firebase from 'firebase';
import React, { Component } from 'react';
import { Button, Card ,CardSection ,Input, Spinner } from './common';
import { Text } from 'react-native';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };


  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSucess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(this.onLoginSucess.bind(this))
        .catch(this.onLoginFaild.bind(this))
      });
    }


    onLoginFaild() {
      this.setState({
        error: 'Authentication Failed',
        loading: false
      });
    }



    onLoginSucess() {
      this.setState({
        email: '',
        password: '',
        loading: false,
        error: ''
      });
    }

    renderButton() {
      if (this.state.loading) {
        return <Spinner size='small' />;
      }

      return (
        <Button onPress={this.onButtonPress.bind(this)} >
          Log in
        </Button>
      );
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
              {this.renderButton()}
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
