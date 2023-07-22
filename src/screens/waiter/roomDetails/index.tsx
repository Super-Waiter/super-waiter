import {ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useMemo} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {Colors, Utils} from '../../../style';
import {BackIcon} from '../../../components/BackIcon';
import {RoomDetailsScreenNavigationProp} from '../../../navigation/types';
import QRCode from 'react-native-qrcode-svg';
import {Spacing} from '../../../components/Spacing';
import {useAppSelector} from '../../../store/hooks';
import {ROOM_STATUS} from '../../../model';

const RoomDetailsScreen = ({
  route,
  navigation,
}: RoomDetailsScreenNavigationProp) => {
  const {rooms} = useAppSelector(state => state.room);
  const client = useAppSelector(state => state.client);
  const currentUser = useAppSelector(state => state.currentUser);
  const currentOrganisation = useAppSelector(
    state => state.currentOrganisation,
  );
  const currentRoom = rooms.find(a => a.id === route.params.id);

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

  useEffect(() => {
    if (client.room === route.params.id) {
      navigation.navigate('ChatScreen', {id: route.params.id});
    }
  }, [client.room, navigation, route.params.id]);

  if (!roomInfo) {
    return null;
  }

  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <ScrollView>
        <AppHeader
          leftIcon={{
            children: <BackIcon color={Colors.White} />,
            onPress: handleGoBack,
          }}
          backgroundColor={Colors.Primary}
          titleColor={Colors.White}
          title={
            currentRoom?.status === ROOM_STATUS.EMPTY
              ? 'Invite'
              : 'Room details'
          }
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
