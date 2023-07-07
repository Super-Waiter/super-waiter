import {StyleSheet} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../../components/AppHeader';
import {Colors} from '../../../style';
import {BackIcon} from '../../../components/BackIcon';

const RoomDetailsScreen = () => {
  return (
    <SafeAreaView edges={['top']} style={styles.main}>
      <AppHeader
        leftIcon={{
          children: <BackIcon color={Colors.White} />,
          onPress: () => {},
        }}
        backgroundColor={Colors.Primary}
        titleColor={Colors.White}
        title="Room Details"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
});

export default RoomDetailsScreen;