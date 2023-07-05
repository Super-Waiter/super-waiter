import React from 'react';
import {FlatList, ScrollView, StyleSheet} from 'react-native';
import {AppButton} from '../../../components/AppButton';
import {Colors} from '../../../style';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../../../components/AppHeader';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WaiterHomeScreenNavigationProp} from '../../../navigation/waiterStack/types';
import {AppText} from '../../../components/AppText';
import {RoomCircleBtn} from './RoomCircleBtn';

const WaiterHomeScreen = () => {
  const navigation = useNavigation<WaiterHomeScreenNavigationProp>();

  const handleLoginPress = () => {
    navigation.navigate('Waiter_Login');
  };

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
        data={Array(50)}
        renderItem={({item}) => {
          return <RoomCircleBtn />;
        }}
        numColumns={4}
      />

      {/* <ScrollView style={styles.scrollView}>
        <AppButton
          fontWeight="bold"
          backgroundColor={Colors.Green}
          onPress={handleLoginPress}
          title="AppButton"
        />
      </ScrollView> */}
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

export default WaiterHomeScreen;
