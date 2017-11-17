import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';


class ListItem extends Component {

  render() {
    const { titleStyle } = Styles;
    return (
      <CardSection>
        <Text style={titleStyle}>
          {this.props.library.title}
        </Text>
      </CardSection>
    );
  }
}


const Styles = {
  titleStyle: {
    fontSize: 20,
    paddingLeft: 15
  }
};


export default ListItem;
