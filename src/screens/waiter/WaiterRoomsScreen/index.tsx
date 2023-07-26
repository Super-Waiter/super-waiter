import React, {useCallback, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// style
import {Colors} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
import {RoomCircleBtn} from './RoomCircleBtn';

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import {RoomStatusInfoModal} from './RoomStatusInfoModal';

import {useAppDispatch, useAppSelector} from '../../../store/hooks';
import {AppButton} from '../../../components/AppButton';
import auth from '@react-native-firebase/auth';
import {CurrentOrganisationActions} from '../../../store/features/currentOrganisation';
import {CurrentUserActions} from '../../../store/features/currentUser';
import {useNavigation} from '@react-navigation/native';
import {WaiterScreenNavigationProp} from '../../../navigation/types';

const WaiterRoomsScreen = () => {
  const navigation = useNavigation<WaiterScreenNavigationProp>();
  const dispatch = useAppDispatch();
  const {rooms} = useAppSelector(state => state.room);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = useCallback(() => {
    setIsModalVisible(p => !p);
  }, []);

  const handleLogOut = () => {
    auth().signOut();

    dispatch(CurrentOrganisationActions.clearCurrentOrganisation());
    dispatch(CurrentUserActions.reset());
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
          return (
            <RoomCircleBtn
              onPress={() => navigation.navigate('RoomDetails', {id: item.id!})}
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
