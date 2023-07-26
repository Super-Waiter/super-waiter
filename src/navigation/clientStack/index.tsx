import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ClientStackParamList} from './types';
import ClientHomeScreen from '../../screens/client/homeScreen';
import HomeChatScreen from '../../screens/client/chatScreen';
import ClientMenuScreen from '../../screens/client/menuScreen';
import socket from '../../socket';
import {useAppDispatch} from '../../store/hooks';
import {ClientActions} from '../../store/features/client';
import {Client} from '../../model';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStack = () => {
  const dispatch = useAppDispatch();

  const _storeData = async (client: Client) => {
    try {
      const jsonValue = JSON.stringify(client);

      await AsyncStorage.setItem('client', jsonValue);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on('client-created', client => {
      console.log(client);

      dispatch(ClientActions.setClient(client));
      _storeData(client);
    });
  }, [dispatch]);

  return (
    <Stack.Navigator
      initialRouteName="Client_Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Client_Home" component={ClientHomeScreen} />
      <Stack.Screen name="Menu_Screen" component={ClientMenuScreen} />
      <Stack.Screen name="Chat_Screen" component={HomeChatScreen} />
    </Stack.Navigator>
  );
};
