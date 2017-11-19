import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';


class App extends Component {

  componentWillMount() {
      const config = {
      apiKey: 'AIzaSyDPWdYuE1IquWYbQZycCGoNYPHT18m3Ehk',
      authDomain: 'manager-7a2d0.firebaseapp.com',
      databaseURL: 'https://manager-7a2d0.firebaseio.com',
      projectId: 'manager-7a2d0',
      storageBucket: 'manager-7a2d0.appspot.com',
      messagingSenderId: '1024776500747'
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>"HEllo"</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
