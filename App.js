/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';

import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  useColorScheme,
  View,
  // Image,
  // Button,
} from 'react-native';

import ImageWithState from './app/components/ImageWithState';
import Compteur from './app/components/Compteur';
import Section from './app/components/Section';
import Home from './app/components/Home';
// import stylesSection from './app/stylesheets/stylesheet_section';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
// const Stack = createNativeStackNavigator();

function App() {
  return (
    <Home />
  );
}


export default App;
