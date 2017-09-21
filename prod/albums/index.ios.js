//code for ios application - index.ios.js
// create a single Component as a starting point of this application

//import library for Component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//create a Component with JSX

const App = () => (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
);

//render it on device

AppRegistry.registerComponent('albums', () => App);
