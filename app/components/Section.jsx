
import React, { useState } from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  // Image,
  // Button,
} from 'react-native'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen'

import { stylesSection } from '../stylesheets/stylesheet_section';

export default function Section({ children, title }) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={stylesSection.sectionContainer}>
      <Text
        style={[
          stylesSection.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          stylesSection.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
