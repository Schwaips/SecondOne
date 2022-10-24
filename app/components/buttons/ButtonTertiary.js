import React from 'react';
import {Text, StyleSheet, Pressable, View} from 'react-native';

export default function ButtonTertiary(props) {
  const {onPress, title = 'Save'} = props;
  return (
    <View style={styles.container}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: 'lightskyblue',
    backgroundColor: 'lightskyblue',
  },
  text: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
