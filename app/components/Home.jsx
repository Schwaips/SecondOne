import React from 'react';

import {
  Text,
  View,
  ScrollView,
  SafeAreaView,
  useColorScheme,
  Button,
  StatusBar,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import ImageWithState from '../components/ImageWithState';
import ButtonPrimary from '../components/buttons/ButtonPrimary';
import Compteur from '../components/Compteur';
import Section from '../components/Section';
import { useNavigation } from '@react-navigation/native';

// const navigation =
const Home = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation();

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return(
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <ImageWithState name="Charlie" />
        <Compteur />
        <View style={{margin: 10}}>
          <ButtonPrimary
            title="Go to Details"
            onPress={() => navigation.navigate('Details', {
              otherParam: 'anything you want here',
            })}
          />
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="Step One">
            Edit <Text>App.js</Text> to change this screen and then come back to
            see your edits.
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="Learn More">
            Read the docs to discover what to do next:
          </Section>
          <LearnMoreLinks />
        </ View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
