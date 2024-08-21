// MainComponent.js
import React from 'react';
import { View,StyleSheet } from 'react-native';
import AbsoluteFillExample from './AbsoluteFillExample';
import CounterComponent from './CounterComponent';

const MainComponent = () => (
  <View style={{flex:1}}>
    <CounterComponent />
    {/* <AbsoluteFillExample/> */}
  </View>
);

export default MainComponent;

const styles = StyleSheet.create({

})
