import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {WaiterStackParamList} from './types';
import WaiterHomeScreen from '../../screens/waiter/homeScreen';
import WaiterLogin from '../../screens/waiter/onboarding/WaiterLogin';
import WaiterSignUp from '../../screens/waiter/onboarding/WaiterSignUp';

const Stack = createNativeStackNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Waiter_Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Waiter_Home" component={WaiterHomeScreen} />
      <Stack.Screen name="Waiter_Login" component={WaiterLogin} />
      <Stack.Screen name="Waiter_SignUp" component={WaiterSignUp} />
    </Stack.Navigator>
  );
};
