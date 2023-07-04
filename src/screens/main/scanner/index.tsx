import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import {AppText} from '../../../components/AppText';

const ScannerScreen = () => {
  const navigation = useNavigation();

  const handleGoToWaiter = () => {};
  const handleGoToClient = () => {};

  return (
    <SafeAreaView style={styles.main} edges={['top']}>
      <AppHeader title="Scan it" />

      <ScrollView>
        <AppText text="Hello World" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default ScannerScreen;
