import React, { useState } from 'react';

import {
  Text,
  View,
  Button,
} from 'react-native';

import { styleText } from '../stylesheets/stylesheet_text';
import { stylesImage } from '../stylesheets/stylesheet_image';
import { stylesButton } from '../stylesheets/stylesheet_button';

function Compteur() {
  const [counter, setCounter] = useState(0);

  const increaseCounter = counter => setCounter(counter + 1);

  return (
    <View style={stylesImage.container}>
      <Button
        title="Increase me !"
        style={(stylesButton.marginTopBottom10px, stylesButton.width100percent)}
        onPress={() => increaseCounter(counter)} />

      <Text style={styleText.colorRed}>{counter}</Text>
    </View>
  );
}

export default Compteur;
