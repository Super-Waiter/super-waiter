import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {Colors, Utils} from '../../../style';
import {BackIcon} from '../../../components/BackIcon';
import {RoomDetailsScreenNavigationProp} from '../../../navigation/types';
import QRCode from 'react-native-qrcode-svg';
import {Spacing} from '../../../components/Spacing';
import {useAppSelector} from '../../../store/hooks';
import {ROOM_STATUS} from '../../../model';
import ChatsScreen from '../chatsScreen';
import {AppText} from '../../../components/AppText';

const RoomDetailsScreen = ({
  route,
  navigation,
}: RoomDetailsScreenNavigationProp) => {
  const {rooms} = useAppSelector(state => state.room);
  const currentUser = useAppSelector(state => state.currentUser);
  const currentOrganisation = useAppSelector(
    state => state.currentOrganisation,
  );

  const value = {
    room: route.params.id,
    // firebaseToken,
    waiter: currentUser.id,
    organisation: currentOrganisation.id,
  };

  console.log(value);

  const roomInfo = useMemo(() => {
    return rooms.find(r => r.id === route.params.id);
  }, [rooms, route.params.id]);

  const handleGoBack = () => {
    navigation.goBack();
  };

  if (!roomInfo) {
    return null;
  }

  return (
    <>
      {roomInfo.status === ROOM_STATUS.EMPTY && (
        <SafeAreaView edges={['top']} style={styles.main}>
          <ScrollView>
            <AppHeader
              leftIcon={{
                children: <BackIcon color={Colors.White} />,
                onPress: handleGoBack,
              }}
              backgroundColor={Colors.Primary}
              titleColor={Colors.White}
              title={'Invite'}
            />
            <Spacing vertical={Utils.DEVICE_WIDTH * 0.1} />

            <View style={styles.qrcodeView}>
              <QRCode
                value={JSON.stringify(value)}
                size={Utils.DEVICE_WIDTH * 0.7}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}

      {roomInfo.status === ROOM_STATUS.BUSY && (
        <ChatsScreen route={route} navigation={navigation} />
      )}

      {roomInfo.status === ROOM_STATUS.BOOKED && (
        <SafeAreaView edges={['top']} style={styles.main}>
          <ScrollView>
            <AppHeader
              leftIcon={{
                children: <BackIcon color={Colors.White} />,
                onPress: handleGoBack,
              }}
              backgroundColor={Colors.Primary}
              titleColor={Colors.White}
              title={'Invite'}
            />
            <Spacing vertical={Utils.DEVICE_WIDTH * 0.1} />

            <View style={styles.qrcodeView}>
              <QRCode
                value={JSON.stringify(value)}
                size={Utils.DEVICE_WIDTH * 0.7}
                // color={resolvRoomStatuseColor(roomInfo.status)}
              />
              <Spacing vertical={10} />
              <AppText
                color={Colors.Yellow}
                text={'Room is booked'}
                fontSize={18}
                fontWeight="bold"
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: Colors.Background,
  },
  qrcodeView: {
    alignItems: 'center',
  },
});

export default RoomDetailsScreen;
