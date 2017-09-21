//code for ios application - index.ios.js
// create a single Component as a starting point of this application

//import library for Component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

//create a Component with JSX

const App = () => (
    <Header headerText={'Albums'} />
);

//render it on device

AppRegistry.registerComponent('albums', () => App);
