/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {WaiterStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import MenuScreen from '../../screens/waiter/menuScreen';
import WaiterRoomsScreen from '../../screens/waiter/waiterRoomsScreen';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../style';
import {getRoomsByOrganisation} from '../../api/room';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RoomActions} from '../../store/features/room';
import socket from '../../socket';
import {ClientActions} from '../../store/features/client';
import WaiterProfileScreen from '../../screens/waiter/profileScreen';

const Stack = createBottomTabNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  const organisation = useAppSelector(state => state.currentOrganisation);
  const dispatch = useAppDispatch();

  useEffect(() => {
    socket.on('client-created', client => {
      dispatch(ClientActions.setClient(client));
    });

    socket.on('room-busy', id => {
      dispatch(RoomActions.busyRoom(id));
    });

    socket.on('room-updated', room => {
      console.log(room);

      dispatch(RoomActions.updateRoom(room));
    });
  }, [dispatch]);

  useEffect(() => {
    const onGetRooms = async () => {
      const {ok, rooms} = await getRoomsByOrganisation(organisation.id);

      if (ok) {
        dispatch(RoomActions.getAllRooms(rooms));
      }
    };
    onGetRooms();
  }, [dispatch, organisation.id]);

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
      <Stack.Screen
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="settings-outline" size={30} color={color} />
          ),
        }}
        name="Profile"
        component={WaiterProfileScreen}
      />
    </Stack.Navigator>
  );
};
