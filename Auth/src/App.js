import React, { Component } from 'react';
import { Text , View } from 'react-native';
import { Header} from './component/common';

class App extends Component {

  render(){
    return(
      <View>
        <Header headerText="Authenticator" />
        <Text> Hello..!!</Text>
      </View>
    );
  }

}

export default App;
