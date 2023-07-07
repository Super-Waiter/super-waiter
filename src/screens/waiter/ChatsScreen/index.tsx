import {StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import React from 'react';

const ChatsScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
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
