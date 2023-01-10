import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ICLogo} from '../../assets';

const Splash = () => {
  return (
    <View style={styles.page}>
      <ICLogo />
      <Text style={styles.title}>Doctorine</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#112340',
    marginTop: 20,
  },
});
