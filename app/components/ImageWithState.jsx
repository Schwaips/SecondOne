import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  Button
} from 'react-native';
import { stylesImage } from '../stylesheets/stylesheet_image';

function ImageWithState() {
  const [isCharlie, setIsCharlie] = useState(true);

  const urlCharlieImage = 'https://media-exp1.licdn.com/dms/image/C4E03AQFnsKnnjD3q0A/profile-displayphoto-shrink_800_800/0/1615321230922?e=1671667200&v=beta&t=-AzcZyBHTrjwSckqFMoeVnjJGkDeV-NUC_PNrCvFWuM';
  const urlNeilDeGrassImage = 'https://cdn.britannica.com/06/202006-050-64C85CC7/Neil-deGrasse-Tyson-2018.jpg';

  const uriImage = isCharlie ? urlCharlieImage : urlNeilDeGrassImage;

  const viewPictures = <View style={stylesImage.container}>
    <Image source={{ uri: uriImage }} style={stylesImage.imageCharlie} />
    <Text style={stylesImage.marginTopBottom10px}>
      Hello I am {isCharlie ? 'Charlie' : '...wait...who is that ?'}
    </Text>
    <Button
      onPress={() => (isCharlie ? setIsCharlie(false) : setIsCharlie(true))}
      title="Is it really me ?" />
  </View>;
  return (
    viewPictures
  );
}

export default ImageWithState;
