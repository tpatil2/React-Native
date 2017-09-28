import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPressprops, children }) => {

  const { ButtonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPressprops} style={ButtonStyle} on>
      <Text style={textStyle}>
       {children}
       </Text>
    </TouchableOpacity>
  );
};


const styles = {
  ButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#999999',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#000000',
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: 'center',
    color: '#000000',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};

export  {Button};
