/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import * as React from 'react';
import { View, Text, Button } from 'react-native';
// import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import ProfileScreen from './app/components/ProfileScreen'
// import stylesSection from './app/stylesheets/stylesheet_section';
import HomeScreen from './app/pages/HomeScreen';
import DetailsScreen from './app/pages/DetailsScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Stack = createNativeStackNavigator();

function App() {
  return (
    // <MyStack />
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: "Page d'accueil"}}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>

    // <Home />
  );
}

export default App;
