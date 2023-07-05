import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import {Spacing} from './Spacing';
import {Colors} from '../style';

export const LoadingBackdrop = () => {
  return (
    <View style={styles.main}>
      <ActivityIndicator size="large" color={Colors.Primary} />

      <Spacing vertical={10} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flex: 1,
    backgroundColor: Colors.WhiteTransparent,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
