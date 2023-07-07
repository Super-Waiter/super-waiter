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
import {useNavigation} from '@react-navigation/native';
import {RoomDetailsScreenNavigationProp} from '../../../navigation/types';

type Props = {
  item: Room;
};

export const RoomCircleBtn = ({item}: Props) => {
  const navigation = useNavigation<RoomDetailsScreenNavigationProp>();

  const dynamicBtnStyles: StyleProp<ViewStyle> = {
    borderColor: resolvRoomStatuseColor(item.status),
  };

  const onPress = () => {
    navigation.navigate('RoomDetails', {id: item.id});
  };

  return (
    <View style={styles.main}>
      <TouchableOpacity
        style={[styles.circle, dynamicBtnStyles]}
        onPress={onPress}>
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
