import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackIcon} from '../../../components/BackIcon';

import React from 'react';
import {AppHeader} from '../../../components/AppHeader';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ChatScreenScreenNavigationProp} from '../../../navigation/types';

const ChatsScreen = ({navigation}: ChatScreenScreenNavigationProp) => {
  const handleGoBack = () => {
    navigation.navigate('Waiter');
  };
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        leftIcon={{
          children: <BackIcon color={Colors.White} />,
          onPress: handleGoBack,
        }}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        title={'Chat Screen'}
      />
      <Text>ChatsScreen</Text>
    </SafeAreaView>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
