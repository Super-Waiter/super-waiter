import React, {useEffect, useRef, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RNBootSplash from 'react-native-bootsplash';
import auth from '@react-native-firebase/auth';

import {WaiterStack} from './waiterStack';
import {ClientStack} from './clientStack';

import ScannerScreen from '../screens/main/onboarding/scanner';
import RoomDetailsScreen from '../screens/waiter/roomDetails';
import Login from '../screens/main/onboarding/login';
import WaiterRoomsScreen from '../screens/waiter/waiterRoomsScreen';

import socket from '../socket';

import {useAppDispatch} from '../store/hooks';
import {CurrentUserActions} from '../store/features/currentUser';
import {CurrentOrganisationActions} from '../store/features/currentOrganisation';

import {SIGNIN_TYPE} from '../model';
import {RootStackParamList} from './types';

import {getOrganisationById} from '../api/organization';
import {getUserByEmail} from '../api/user';
import axios from 'axios';
import ChatsScreen from '../screens/waiter/chatsScreen';
import EditProfileScreen from '../screens/waiter/editProfileScreen/inex';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const dispatch = useAppDispatch();

  const currentUserRef = useRef(auth().currentUser);

  const [isSignedIn, setIsSignedIn] = useState<SIGNIN_TYPE>(
    SIGNIN_TYPE.UNSIGNED,
  );

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected');

      socket.on('user-joined', (userId: any) => {
        console.log(userId);
      });

      socket.on('qrCode-checked', userId => {
        if (userId.length) {
          setIsSignedIn(SIGNIN_TYPE.CLIENT);
        }
      });
    });

    // socket.on('disconnect', () => {
    //   console.log('disconnected');
    // });

    return () => {
      socket.disconnect();
    };
  }, []);

  const onNavigationReady = async () => {
    //check waiter
    const token = await auth().currentUser?.getIdToken();
    if (currentUserRef.current) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      const email = currentUserRef.current?.email;

      try {
        const {user, ok} = await getUserByEmail(email!);

        if (ok) {
          dispatch(CurrentUserActions.setCurrentUser(user));
          const {ok: okOrganisation, organisation} = await getOrganisationById(
            user.organisation!,
          );

          if (okOrganisation) {
            dispatch(
              CurrentOrganisationActions.setCurrentOrganisation(organisation),
            );
          }

          setIsSignedIn(SIGNIN_TYPE.WAITER);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(CurrentUserActions.reset());
      dispatch(CurrentOrganisationActions.clearCurrentOrganisation());
      setIsSignedIn(SIGNIN_TYPE.UNSIGNED);
    }

    RNBootSplash.hide({fade: true, duration: 500});
  };

  return (
    <NavigationContainer onReady={onNavigationReady}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {isSignedIn === SIGNIN_TYPE.WAITER && (
          <Stack.Group>
            <Stack.Screen name="Waiter" component={WaiterStack} />
            <Stack.Screen name="RoomDetails" component={RoomDetailsScreen} />
            <Stack.Screen name="Rooms" component={WaiterRoomsScreen} />
            <Stack.Screen name="ChatScreen" component={ChatsScreen} />
            <Stack.Screen name="EditProfile" component={EditProfileScreen} />
          </Stack.Group>
        )}
        {isSignedIn === SIGNIN_TYPE.UNSIGNED && (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
          </>
        )}
        {isSignedIn === SIGNIN_TYPE.CLIENT && (
          <>
            <Stack.Screen name="Client" component={ClientStack} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
