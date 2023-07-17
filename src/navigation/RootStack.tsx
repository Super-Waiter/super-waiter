import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {WaiterStack} from './waiterStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {ClientStack} from './clientStack';
import ScannerScreen from '../screens/main/scanner';
import RoomDetailsScreen from '../screens/waiter/roomDetails';
import SignupWaiterScreen from '../screens/main/SignupWaiterScreen';
import socket from '../socket';
import {useAppDispatch} from '../store/hooks';
import {CurrentUserActions} from '../store/features/currentUser';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const dispatch = useAppDispatch();

  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');

      socket.emit('user-joined', {userId: '1234'});
    });

    socket.on('disconnect', () => {
      console.log('disconnected');
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  // Handle user state changes
  function onAuthStateChanged(firebaseUser: FirebaseAuthTypes.User | null) {
    dispatch(CurrentUserActions.setCurrentUser(firebaseUser));

    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Scanner"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Client" component={ClientStack} />
        <Stack.Screen name="Waiter" component={WaiterStack} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
        <Stack.Screen name="SignupWaiter" component={SignupWaiterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
