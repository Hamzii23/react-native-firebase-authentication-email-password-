import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.HeaderTitle}> FireBase Authentication</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    height: 50,
  },
  HeaderTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default Header;
