import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../Actions'


class ListItem extends Component {

  render() {
    const { titleStyle } = Styles;
    console.log(this.props);
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


export default connect(null, actions)(ListItem);
