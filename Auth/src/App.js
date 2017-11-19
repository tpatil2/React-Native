import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './component/common';
import LoginForm from './component/LoginForm';

class App extends Component {

  state = { loggedIn: false };

  componentwillMount() {
    const config = {
    apiKey: "AIzaSyAPumu2AapdbLusmnodO4BZi_O1qbZxC3Y",
    authDomain: "authentication-ab2a6.firebaseapp.com",
    databaseURL: "https://authentication-ab2a6.firebaseio.com",
    projectId: "authentication-ab2a6",
    storageBucket: "authentication-ab2a6.appspot.com",
    messagingSenderId: "798916811371"
  };

  firebase.initializeApp(config);


    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log out
          </Button>
        );
      case false:
        return < LoginForm />;
      default:
        return <Spinner size="large" />;
    }
  }


  render() {
    return (
      <View>
        <Header headerText="Authenticator" />
        {this.renderContent()}
      </View>
    );
  }

}

export default App;
