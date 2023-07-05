import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../../components/AppText';
import {Colors, Fonts, Utils} from '../../../style';

export const RoomCircleBtn = () => {
  return (
    <View style={styles.main}>
      <TouchableOpacity style={styles.circle}>
        <AppText
          color={Colors.Primary}
          fontSize={Fonts.xl2}
          fontWeight="semibold">
          234
        </AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: Utils.DEVICE_WIDTH * 0.25,
    height: Utils.DEVICE_WIDTH * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: '90%',
    height: '90%',
    borderRadius: 99,
    borderWidth: 2,
    borderColor: Colors.Primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
