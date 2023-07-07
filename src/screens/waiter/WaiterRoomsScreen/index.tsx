import React, {useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Modal from 'react-native-modal';

// style
import {Colors} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
import {AppText} from '../../../components/AppText';
import {RoomCircleBtn} from './RoomCircleBtn';
import {tempRoomData} from '../../../tempData/rooms';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppButton} from '../../../components/AppButton';
import {Spacing} from '../../../components/Spacing';
import {ROOM_STATUS} from '../../../model';
import {resolvRoomStatuseColor} from '../../../utils/resolvRoomStatuseColor';

const WaiterRoomsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const sortedRoomsByStatus = useMemo(() => {
    return tempRoomData.sort((a, b) => {
      return a.status - b.status;
    });
  }, []);

  const toggleModal = () => [setIsModalVisible(p => !p)];

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        showLogo={false}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        leftIcon={{
          children: (
            <AppText color={Colors.White} fontWeight={'semibold'}>
              Asosiy menu
            </AppText>
          ),
        }}
        rightIcon={{
          onPress: () => {},
          children: (
            <AntDesign
              color={Colors.White}
              name="questioncircleo"
              size={30}
              onPress={toggleModal}
            />
          ),
        }}
      />

      <FlatList
        data={sortedRoomsByStatus}
        renderItem={({item}) => {
          return <RoomCircleBtn item={item} />;
        }}
        numColumns={4}
      />

      <Modal
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

          <AppButton
            title="Okay"
            width={100}
            height={32}
            onPress={toggleModal}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

interface ItemProps {
  status: ROOM_STATUS;
}

const Item = (props: ItemProps) => {
  const {status} = props;

  const color = resolvRoomStatuseColor(status);

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
    <>
      <View style={styles.component}>
        <View style={[styles.dot, {backgroundColor: color}]} />
        <Spacing vertical={10} />
        <AppText text="-" />
        <Spacing vertical={10} />
        <AppText text={resolveStatusTitle()} />
      </View>
      <Spacing horizontal={10} />
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: Colors.White,
    padding: '5%',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: Colors.White,
    width: 230,
    height: 240,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
  },
  dot: {
    width: 25,
    height: 25,
    borderRadius: 99,
  },
  mainView: {
    width: '100%',
    paddingHorizontal: 20,
  },
  component: {
    flexDirection: 'row',
  },
});

export default WaiterRoomsScreen;
