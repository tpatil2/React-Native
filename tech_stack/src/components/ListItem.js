import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../Actions';


class ListItem extends Component {

  render() {
    const { titleStyle } = Styles;
    const { id, title } = this.props.library;

    return (
          <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
          </View>
          </TouchableWithoutFeedback>
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
