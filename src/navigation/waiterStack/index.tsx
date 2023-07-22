/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect} from 'react';
import {WaiterStackParamList} from './types';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// screens
import MenuScreen from '../../screens/waiter/menuScreen';
import WaiterRoomsScreen from '../../screens/waiter/waiterRoomsScreen';

// icons
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors} from '../../style';
import {getRoomsByOrganisation} from '../../api/room';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {RoomActions} from '../../store/features/room';

const Stack = createBottomTabNavigator<WaiterStackParamList>();

export const WaiterStack = () => {
  const organisation = useAppSelector(state => state.currentOrganisation);
  const dispatch = useAppDispatch();

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
    </Stack.Navigator>
  );
};
