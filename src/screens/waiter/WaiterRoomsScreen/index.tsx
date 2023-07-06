import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// style
import {Colors} from '../../../style';

// components
import {AppHeader} from '../../../components/AppHeader';
import {AppText} from '../../../components/AppText';
import {RoomCircleBtn} from './RoomCircleBtn';
import {tempRoomData} from '../../../tempData/foods';
import {Room} from '../../../model';

const WaiterRoomsScreen = () => {
  const [displayedRooms, setDisplayedRooms] = useState<Room[]>([]);

  useEffect(() => {
    const sortedRooms = tempRoomData.sort((a, b) => {});

    setDisplayedRooms(sortedRooms);
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
      />

      <FlatList
        data={displayedRooms}
        renderItem={({item}) => {
          return <RoomCircleBtn item={item} />;
        }}
        numColumns={4}
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