import {ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {useNavigation} from '@react-navigation/native';
import {ScannerScreenNavigationProp} from '../../../navigation/types';
import {AppButton} from '../../../components/AppButton';
import {Colors} from '../../../style';

const ScannerScreen = () => {
  const navigation = useNavigation<ScannerScreenNavigationProp>();

  const handleGoToWaiter = () => {
    navigation.navigate('Waiter');
  };
  const handleGoToClient = () => {
    navigation.navigate('Client');
  };

  return (
    <SafeAreaView style={styles.main} edges={['top']}>
      <AppHeader
        title="Welcome"
        titleColor={Colors.White}
        backgroundColor={Colors.Primary}
      />

      <ScrollView>
        <AppButton title="Client" onPress={handleGoToWaiter} />
        <AppButton title="Waiter" onPress={handleGoToClient} />
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
