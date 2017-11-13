import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  componentwillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyAY39-E7Yq2jJi0SPEnAI5jg1lxiVEB1t8',
      authDomain: 'auth-d8f0c.firebaseapp.com',
      databaseURL: 'https://auth-d8f0c.firebaseio.com',
      projectId: 'auth-d8f0c',
      storageBucket: 'auth-d8f0c.appspot.com',
      messagingSenderId: '364908407589'
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
