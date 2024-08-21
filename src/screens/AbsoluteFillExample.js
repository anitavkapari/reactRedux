import React from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';

const AbsoluteFillExample = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={{ flex: 1 }}
      >
        <View style={StyleSheet.absoluteFill}>
          <View style={styles.overlay}>
            <Text style={styles.text}>Overlay Text</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default AbsoluteFillExample;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
});

