/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, View} from 'react-native';
import EmailPassword from './Auth/email-password';
import Header from './Auth/header/header';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Header />
      <EmailPassword />
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
export default App;
