import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ClientStackParamList} from './types';
import ClientHomeScreen from '../../screens/client/homeScreen';
import HomeChatScreen from '../../screens/client/chatScreen';
import ClientMenuScreen from '../../screens/client/menuScreen';

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Menu_Screen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Client_Home" component={ClientHomeScreen} />
      <Stack.Screen name="Menu_Screen" component={ClientMenuScreen} />
      <Stack.Screen name="Chat_Screen" component={HomeChatScreen} />
    </Stack.Navigator>
  );
};
