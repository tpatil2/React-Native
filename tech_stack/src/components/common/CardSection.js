
import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};


const styles = {
    containerStyle: {
      borderBottomWidth: 1,
      padding: 5,
      borderColor: '#000000',
      backgroundColor: '#fff',
    //  backgroundColor: '#bfbfbf',
      justifyContent: 'flex-start',
      flexDirection: 'row',
      borderColor: '#ddd',
      position: 'relative',
    }

};

export  {CardSection};
