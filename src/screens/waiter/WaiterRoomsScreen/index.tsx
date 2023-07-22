import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// style
import {Colors} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
// import {AppText} from '../../../components/AppText';
import {RoomCircleBtn} from './RoomCircleBtn';
// import {tempRoomData} from '../../../tempData/rooms';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RoomStatusInfoModal} from './RoomStatusInfoModal';

import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {AppButton} from '../../../components/AppButton';
import auth from '@react-native-firebase/auth';
import {CurrentOrganisationActions} from '../../../store/features/currentOrganisation';
import {CurrentUserActions} from '../../../store/features/currentUser';
import socket from '../../../socket';
import {RoomActions} from '../../../store/features/room';
import {ClientActions} from '../../../store/features/client';
import {useNavigation} from '@react-navigation/native';
import {WaiterScreenNavigationProp} from '../../../navigation/types';

const WaiterRoomsScreen = () => {
  const navigation = useNavigation<WaiterScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const {rooms} = useAppSelector(state => state.room);
  const client = useAppSelector(state => state.client);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [navigateRoomId, setNavigateRoomId] = useState<string>(' ');

  useEffect(() => {
    socket.on('client-created', client => {
      dispatch(ClientActions.setClient(client));
    });

    socket.on('room-busy', id => {
      dispatch(RoomActions.busyRoom(id));
    });
  }, [dispatch]);

  // const sortedRoomsByStatus = rooms?.sort((a, b) => a.status - b.status);

  // const sortedRoomsByStatus = useMemo(() => {
  //   // console.warn(rooms);

  //   if (rooms.length !== 0) {
  //     return rooms?.sort((a, b) => {
  //       return a.status - b.status;
  //     });
  //   }
  // }, [rooms]);

  const toggleModal = useCallback(() => {
    setIsModalVisible(p => !p);
  }, []);

  const handleLogOut = () => {
    auth().signOut();

    dispatch(CurrentOrganisationActions.clearCurrentOrganisation());
    dispatch(CurrentUserActions.reset());
  };

  const onNavigatePress = () => {
    console.log('CLIENT', client);

    if (client.room === navigateRoomId) {
      navigation.navigate('ChatScreen', {id: navigateRoomId});
    } else {
      navigation.navigate('RoomDetails', {id: navigateRoomId});
    }
  };

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        showLogo={false}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        leftIcon={{
          children: (
            // <AppText color={Colors.White} fontWeight={'semibold'}>
            //   Asosiy menu
            // </AppText>
            <AppButton
              width={100}
              onPress={handleLogOut}
              title="Log out"
              textAlign="center"
              backgroundColor={Colors.White}
              color={Colors.Primary}
              height={40}
            />
          ),
        }}
        rightIcon={{
          onPress: toggleModal,
          children: (
            <AntDesign color={Colors.White} name="questioncircleo" size={30} />
          ),
        }}
      />

      <FlatList
        data={rooms}
        renderItem={({item}) => {
          setNavigateRoomId(item.id!);
          return (
            <RoomCircleBtn
              onPress={onNavigatePress}
              name={item.name}
              status={item.status}
            />
          );
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
    backgroundColor: Colors.Background,
  },
  scrollView: {
    backgroundColor: Colors.White,
    padding: '5%',
  },
});

export default WaiterRoomsScreen;
