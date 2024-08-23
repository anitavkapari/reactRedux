/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/root/store';
import ApiComponent from './src/screens/ApiComponent';
import AsyncStorageExample from './src/screens/AsyncStorageExample';
import ItemList from './src/screens/ItemList';
import MainComponent from './src/screens/MainComponent';
import UserComponent from './src/screens/UserComponent';



function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    // backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
   <Provider store={store}>
     
      {/* <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            // backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={styles.highlight}>App</Text>
        </View>
      </ScrollView>
    </SafeAreaView> */}
    {/* <MainComponent/> */}
    {/* <AsyncStorageExample/> */}
    {/* <UserComponent/> */}
    {/* <ApiComponent/> */}
    <ItemList/>
   </Provider>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
