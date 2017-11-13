import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  componentwillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAPumu2AapdbLusmnodO4BZi_O1qbZxC3Y',
      authDomain: 'authentication-ab2a6.firebaseapp.com',
      databaseURL: 'https://authentication-ab2a6.firebaseio.com',
      projectId: 'authentication-ab2a6',
      storageBucket: 'authentication-ab2a6.appspot.com',
      messagingSenderId: '798916811371'
    });
  }
  render() {
    return (
      <View>
        <Header headerText="Authenticator" />
        <LoginForm />
      </View>
    );
  }

}

export default App;
