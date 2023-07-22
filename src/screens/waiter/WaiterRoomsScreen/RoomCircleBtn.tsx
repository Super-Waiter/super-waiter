import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {AppText} from '../../../components/AppText';
import {ROOM_STATUS} from '../../../model';
import {Colors, Fonts, Utils} from '../../../style';
import {resolvRoomStatuseColor} from '../../../utils/resolvRoomStatuseColor';

type Props = {
  onPress: () => void;
  status: ROOM_STATUS;
  name: string | number;
};

export const RoomCircleBtn = ({onPress, status, name}: Props) => {
  const dynamicBtnStyles: StyleProp<ViewStyle> = {
    borderColor: resolvRoomStatuseColor(status),
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[styles.circle, dynamicBtnStyles]}
        onPress={onPress}>
        <AppText
          color={resolvRoomStatuseColor(status)}
          fontSize={Fonts.xl2}
          fontWeight="semibold">
          {name}
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
