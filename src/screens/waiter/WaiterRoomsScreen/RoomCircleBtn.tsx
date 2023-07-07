import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {AppText} from '../../../components/AppText';
import {Room} from '../../../model';
import {Colors, Fonts, Utils} from '../../../style';
import {resolvRoomStatuseColor} from '../../../utils/resolvRoomStatuseColor';

type Props = {
  item: Room;
};

export const RoomCircleBtn = ({item}: Props) => {
  const dynamicBtnStyles: StyleProp<ViewStyle> = {
    borderColor: resolvRoomStatuseColor(item.status),
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity style={[styles.circle, dynamicBtnStyles]}>
        <AppText
          color={resolvRoomStatuseColor(item.status)}
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
