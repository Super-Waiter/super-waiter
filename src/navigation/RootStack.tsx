import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {WaiterStack} from './waiterStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {ClientStack} from './clientStack';
import ScannerScreen from '../screens/main/scanner';
import RoomDetailsScreen from '../screens/waiter/roomDetails';
import socket from '../socket';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Waiter"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Client" component={ClientStack} />
        <Stack.Screen name="Waiter" component={WaiterStack} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
