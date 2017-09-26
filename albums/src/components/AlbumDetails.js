
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';


const AlbumDetail = ({ album }) =>{

  //multiple refrecences to props abject

  const { title, artist, thumbnail_image} = album;

  return (
    <Card>
      <CardSection>
        <View >
          <Image
            style={styles.imageStyle}
            source={{ uri: thumbnail_image }}
           />
        </View>
        <View style={styles.headerContentStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>


      </CardSection>
    </Card>
  );
};


const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: 50,
    width: 50
  }
};

export default AlbumDetail;
