/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {WaiterStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import MenuScreen from '../../screens/waiter/menuScreen';
import WaiterRoomsScreen from '../../screens/waiter/waiterRoomsScreen';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../style';

const Stack = createBottomTabNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rooms"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.Primary,
      }}>
      <Stack.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="view-dashboard"
              size={30}
              color={color}
            />
          ),
        }}
        name="Rooms"
        component={WaiterRoomsScreen}
      />
      <Stack.Screen
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="food-outline"
              size={30}
              color={color}
            />
          ),
        }}
        name="Menu"
        component={MenuScreen}
      />
    </Stack.Navigator>
  );
};
