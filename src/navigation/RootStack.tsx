/* eslint-disable react-hooks/exhaustive-deps */
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

import {useAppDispatch, useAppSelector} from '../store/hooks';
import {CurrentUserActions} from '../store/features/currentUser';
import {CurrentOrganisationActions} from '../store/features/currentOrganisation';

import {RootStackParamList} from './types';

import {getOrganisationById} from '../api/organization';
import {getUserByEmail} from '../api/user';
import axios from 'axios';
import ChatsScreen from '../screens/waiter/chatsScreen';
import EditProfileScreen from '../screens/waiter/editProfileScreen/inex';

import {deleteClientFromStorage, getClientFromStorage} from '../api/client';
import {SIGNIN_TYPE} from '../model';
import {ClientActions} from '../store/features/client';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  const dispatch = useAppDispatch();

  const currentUserRef = useRef(auth().currentUser);

  const [isSignedIn, setIsSignedIn] = useState<SIGNIN_TYPE>(
    SIGNIN_TYPE.UNSIGNED,
  );

  useEffect(() => {
    onNavigationReady();

    // sign out
    getClientFromStorage().then(res => {
      if (res.ok) {
        // deleteClientFromStorage(res.data.id!);
        console.log('hello');

        socket.on('client-closed', id => {
          console.log('hello1');
          console.log(id, res.data.id);

          if (res.data.id === id) {
            deleteClientFromStorage(id);
            setIsSignedIn(SIGNIN_TYPE.UNSIGNED);
            dispatch(ClientActions.reset);
          }
        });
      }
    });
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

    socket.on('connect', () => {
      console.log('hello');

      console.log('connected');

      socket.on('qrCode-checked', userId => {
        if (userId.length) {
          setIsSignedIn(SIGNIN_TYPE.CLIENT);
        }
      });
    });

    // check client

    getClientFromStorage().then(res => {
      if (res.ok) {
        socket.emit('check-client', res.data.id!);
        socket.on('client-checked', async ok => {
          if (ok) {
            setIsSignedIn(SIGNIN_TYPE.CLIENT);
          } else {
            setIsSignedIn(SIGNIN_TYPE.UNSIGNED);
            await deleteClientFromStorage(res.data.id!);
            dispatch(ClientActions.reset);
          }
        });
      }
    });

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
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Scanner" component={ScannerScreen} />
          </Stack.Group>
        )}
        {isSignedIn === SIGNIN_TYPE.CLIENT && (
          <Stack.Group>
            <Stack.Screen name="Client" component={ClientStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
