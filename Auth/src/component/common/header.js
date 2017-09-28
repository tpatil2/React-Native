//import Component

import React from 'react';
import { Text, View } from 'react-native';

//make a Component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {

    viewStyle: {
      backgroundColor: '#C0C0C0',
      justifyContent: 'center',
      alignItems: 'center',
      height: 60,
      paddingTop: 15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.5,
      elevation: 2,
      position: 'relative'
    },
   textStyle: {
     fontSize: 30
   }
};
//make Header Component available to root Component
export  {Header};
