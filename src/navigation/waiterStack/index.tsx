import React from 'react';
import {WaiterStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import MenuScreen from '../../screens/waiter/MenuScreen';
import ChatsScreen from '../../screens/waiter/ChatsScreen';
import WaiterRoomsScreen from '../../screens/waiter/WaiterRoomsScreen';

// icons
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';

const Stack = createBottomTabNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Rooms"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
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
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <Entypo name="chat" size={30} color={color} />
          ),
        }}
        name="Chats"
        component={ChatsScreen}
      />
      <Stack.Screen
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
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
