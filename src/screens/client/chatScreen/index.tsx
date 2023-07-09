import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';
import {AppHeader} from '../../../components/AppHeader';
import {Colors} from '../../../style';
import AppChat from '../../../components/AppChat';

const HomeChatScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        title="Welcome"
      />
      <AppChat />
    </SafeAreaView>
  );
};

export default HomeChatScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
