import React from 'react';
import {WaiterStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from '../../screens/waiter/ProfileScreen';
import AddRoomScreen from '../../screens/waiter/AddRoomScreen';
import WaiterRoomsScreen from '../../screens/waiter/WaiterRoomsScreen';

const Stack = createBottomTabNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rooms"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Rooms" component={WaiterRoomsScreen} />
      <Stack.Screen name="AddRoom" component={AddRoomScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};
