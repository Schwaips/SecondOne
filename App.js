/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import type {Node} from 'react';
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
} from 'react-native';

import ImageWithState from './app/components/ImageWithState';
import Compteur from './app/components/Compteur';
import Section from './app/components/Section';
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


function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <ImageWithState name="Charlie" />
        <Compteur />
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   imageCharlie: {
//     textAlign: 'center',
//   },
// });


// Composant test with PROPS
// const ImageCharlie = props => {
//   const urlCharlieImage =
//     'https://media-exp1.licdn.com/dms/image/C4E03AQFnsKnnjD3q0A/profile-displayphoto-shrink_800_800/0/1615321230922?e=1671667200&v=beta&t=-AzcZyBHTrjwSckqFMoeVnjJGkDeV-NUC_PNrCvFWuM';
//   return (
//     <View style={stylesImage.container}>
//       <Image
//         source={{
//           uri: urlCharlieImage,
//         }}
//         style={stylesImage.imageCharlie}
//       />
//       <Text>Hello, I am {props.name}</Text>
//     </View>
//   );
// };

// const ImageWithState = () => {
//   const [isCharlie, setIsCharlie] = useState(true);

//   const urlCharlieImage =
//     'https://media-exp1.licdn.com/dms/image/C4E03AQFnsKnnjD3q0A/profile-displayphoto-shrink_800_800/0/1615321230922?e=1671667200&v=beta&t=-AzcZyBHTrjwSckqFMoeVnjJGkDeV-NUC_PNrCvFWuM';
//   const urlNeilDeGrassImage =
//     'https://cdn.britannica.com/06/202006-050-64C85CC7/Neil-deGrasse-Tyson-2018.jpg';

//   const uriImage = isCharlie ? urlCharlieImage : urlNeilDeGrassImage;

//   return (
//     <View style={stylesImage.container}>
//       <Image source={{uri: uriImage}} style={stylesImage.imageCharlie} />
//       <Text style={stylesImage.marginTopBottom10px}>
//         Hello I am {isCharlie ? 'Charlie' : '...wait...who is that ?'}
//       </Text>
//       <Button
//         onPress={() => (isCharlie ? setIsCharlie(false) : setIsCharlie(true))}
//         title="Is it really me ?"
//       />
//     </View>
//   );
// };

// const Compteur = () => {
//   const [counter, setCounter] = useState(0);

//   const increaseCounter = counter => {
//     return setCounter(counter + 1);
//   };

//   return (
//     <View style={stylesImage.container}>
//       <Button
//         title="Increase me !"
//         style={(styleButton.marginTopBottom10px, styleButton.width100percent)}
//         onPress={() => increaseCounter(counter)}
//       />

//       <Text style={styleText.colorRed}>{counter}</Text>
//     </View>
//   );
// };

export default App;
