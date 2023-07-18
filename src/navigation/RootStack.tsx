import React, {useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

import {WaiterStack} from './waiterStack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {ClientStack} from './clientStack';
import ScannerScreen from '../screens/main/onboarding/scanner';
import RoomDetailsScreen from '../screens/waiter/roomDetails';
import Login from '../screens/main/onboarding/login';
import socket from '../socket';
import {useAppDispatch} from '../store/hooks';
import {CurrentUserActions} from '../store/features/currentUser';
import {getUserByEmail} from '../api/user';
import RNBootSplash from 'react-native-bootsplash';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const dispatch = useAppDispatch();

  const currentUserRef = useRef(auth().currentUser);

  const [isSignedIn, setIsSignedIn] = useState(false);
  const [initialRouteName, setInitialRouteName] =
    useState<keyof RootStackParamList>('Scanner');

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

  const onNavigationReady = async () => {
    if (currentUserRef.current) {
      const email = currentUserRef.current?.email;

      try {
        const {user, ok} = await getUserByEmail(email!);
        if (ok) {
          dispatch(CurrentUserActions.setCurrentUser(user));

          setInitialRouteName('Waiter');
          setIsSignedIn(true);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(CurrentUserActions.reset());
      setInitialRouteName('Scanner');
      // Reset qil Madaminjon

      setIsSignedIn(false);
    }

    // setTimeout(() => {
    RNBootSplash.hide({fade: true, duration: 500});
    // }, 1000);
  };

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isSignedIn ? (
          <>
            <Stack.Screen name="Waiter" component={WaiterStack} />
            <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
            <Stack.Screen name="Client" component={ClientStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
