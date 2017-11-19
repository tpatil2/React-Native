import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk'
import reducers from './reducers';
import LoginForm from './component/LoginForm';

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
    return ( // {} for initil state
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <View>
          <LoginForm />
        </View>
      </Provider>
    );
  }

}

export default App;
