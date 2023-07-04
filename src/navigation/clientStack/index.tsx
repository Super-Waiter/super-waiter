import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ClientStackParamList} from './types';
import ClientHomeScreen from '../../screens/client/homeScreen';

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Client_Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Client_Home" component={ClientHomeScreen} />
    </Stack.Navigator>
  );
};
