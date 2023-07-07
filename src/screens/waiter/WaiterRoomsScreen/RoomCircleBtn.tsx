import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {AppText} from '../../../components/AppText';
import {Room, ROOM_STATUS} from '../../../model';
import {Colors, Fonts, Utils} from '../../../style';

type Props = {
  item: Room;
};

export const RoomCircleBtn = ({item}: Props) => {
  const resolveColor = () => {
    if (item.status === ROOM_STATUS.BOOKED) {
      return Colors.Yellow;
    }

    if (item.status === ROOM_STATUS.BUSY) {
      return Colors.Primary;
    }

    if (item.status === ROOM_STATUS.CALLING) {
      return Colors.Red;
    }

    return Colors.Grey;
  };

  const dynamicBtnStyles: StyleProp<ViewStyle> = {
    borderColor: resolveColor(),
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity style={[styles.circle, dynamicBtnStyles]}>
        <AppText
          color={resolveColor()}
          fontSize={Fonts.xl2}
          fontWeight="semibold">
          {item.id}
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
