import React, {useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// style
import {Colors} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
import {AppText} from '../../../components/AppText';
import {RoomCircleBtn} from './RoomCircleBtn';
import {tempRoomData} from '../../../tempData/rooms';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RoomStatusInfoModal} from './RoomStatusInfoModal';

const WaiterRoomsScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const sortedRoomsByStatus = useMemo(() => {
    return tempRoomData.sort((a, b) => {
      return a.status - b.status;
    });
  }, []);

  const toggleModal = useCallback(() => {
    setIsModalVisible(p => !p);
  }, []);

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

      <RoomStatusInfoModal
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
      />
    </SafeAreaView>
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
});

export default WaiterRoomsScreen;
