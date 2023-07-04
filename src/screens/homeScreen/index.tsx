import React from 'react';
import {View, Text} from 'react-native';
import {AppButton} from '../../components/AppButton';
import {Colors} from '../../style';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../navigation/types';

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View>
      <Text>HomeScreen</Text>

      <AppButton
        backgroundColor={Colors.Green}
        onPress={handleLoginPress}
        title="AppButton"
      />
    </View>
  );
};

export default HomeScreen;
