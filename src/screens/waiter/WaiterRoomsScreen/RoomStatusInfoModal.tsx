import {View, StyleSheet} from 'react-native';
import React from 'react';
import ReactNativeModal from 'react-native-modal';
import {AppText} from '../../../components/AppText';
import {Spacing} from '../../../components/Spacing';
import {ROOM_STATUS} from '../../../model';
import {AppButton} from '../../../components/AppButton';
import {Colors} from '../../../style';
import {resolveRoomStatusColor} from '../../../utils/resolveRoomStatusColor';

interface Props {
  isModalVisible: boolean;
  toggleModal: () => void;
}

export const RoomStatusInfoModal = (props: Props) => {
  const {isModalVisible, toggleModal} = props;

  return (
    <ReactNativeModal
      onBackButtonPress={toggleModal}
      onBackdropPress={toggleModal}
      useNativeDriver
      hideModalContentWhileAnimating
      style={styles.modal}
      animationIn="fadeIn"
      animationOut="fadeOut"
      isVisible={isModalVisible}>
      <View style={styles.modalView}>
        <AppText text="STATUS TYPES" fontWeight="bold" />

        <Spacing vertical={10} />

        <View style={styles.mainView}>
          {[
            ROOM_STATUS.CALLING,
            ROOM_STATUS.BOOKED,
            ROOM_STATUS.BUSY,
            ROOM_STATUS.EMPTY,
          ].map((item, i) => (
            <Item status={item} key={i} />
          ))}
        </View>

        <Spacing vertical={5} />

        <AppButton
          title="Okay"
          fontWeight="bold"
          width={120}
          height={40}
          onPress={toggleModal}
        />
      </View>
    </ReactNativeModal>
  );
};

interface ItemProps {
  status: ROOM_STATUS;
}

const Item = (props: ItemProps) => {
  const {status} = props;

  const color = resolveRoomStatusColor(status);

  const resolveStatusTitle = () => {
    if (status === ROOM_STATUS.BOOKED) {
      return 'Booked';
    }

    if (status === ROOM_STATUS.BUSY) {
      return 'Busy';
    }

    if (status === ROOM_STATUS.CALLING) {
      return 'Calling';
    }

    return 'Empty';
  };

  return (
    <View style={styles.component}>
      <View style={[styles.dot, {backgroundColor: color}]} />
      <Spacing vertical={10} />

      <AppText text="-" fontWeight="semibold" />

      <Spacing vertical={10} />
      <AppText text={resolveStatusTitle()} fontWeight="semibold" />
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: Colors.White,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  mainView: {
    width: '100%',
    paddingHorizontal: 10,
  },
  dot: {
    width: 35,
    height: 35,
    borderRadius: 99,
  },
  component: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
