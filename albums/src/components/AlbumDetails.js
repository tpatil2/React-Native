
import React from 'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetail = ({ album }) => {

  //multiple refrecences to props abject

  const { title,
          artist,
          thumbnail_image,
          image,
          url} = album;

  const { headerContentStyle,
          imageStyle,
          thumbnailContainerStyle,
          headerTextStyle,
          imageContainerStyle } = styles;

  return (
    <Card>

      <CardSection>
        <View style={thumbnailContainerStyle} >
          <Image
            style={imageStyle}
            source={{ uri: thumbnail_image }}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      <CardSection>
        <Image
        style={imageContainerStyle}
        source={{ uri: image }}
        />
      </CardSection>

      <CardSection>
        <Button onPressprops={() => Linking.openURL(url)}>
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  headerTextStyle: {
    fontSize: 18
  },
  imageStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageContainerStyle: {
    height: 300,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
