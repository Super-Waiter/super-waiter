import {Alert, StyleSheet, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {BackIcon} from '../../../components/BackIcon';
import {CloseIcon} from '../../../components/CloseIcon';

import React from 'react';
import {AppHeader} from '../../../components/AppHeader';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {ChatScreenScreenNavigationProp} from '../../../navigation/types';
import socket from '../../../socket';

const ChatsScreen = ({navigation, route}: ChatScreenScreenNavigationProp) => {
  const handleGoBack = () => {
    navigation.navigate('Waiter');
  };

  const handleCloseRoom = () => {
    socket.emit('close-room', route.params.id);
  };

  const toggleModal = () => {
    // setIsModalVisible(p => !p);
    Alert.alert('Are you sure', 'Hello', [
      {
        text: 'No',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: handleCloseRoom,
        style: 'destructive',
      },
    ]);
  };
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        leftIcon={{
          children: <BackIcon color={Colors.White} />,
          onPress: handleGoBack,
        }}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        title={'Chat Screen'}
        rightIcon={{
          children: <CloseIcon color={Colors.White} />,
          onPress: toggleModal,
        }}
      />
      <Text>ChatsScreen</Text>
    </SafeAreaView>
  );
};

export default ChatsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});
