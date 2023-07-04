import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppText} from '../../../components/AppText';

const ClientHomeScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppText text="Hello Madaminjon" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default ClientHomeScreen;
