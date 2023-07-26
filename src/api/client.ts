import AsyncStorage from '@react-native-async-storage/async-storage';
import {Client} from '../model';

export const getClientFromStorage = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('client');
    if (jsonValue != null) {
      return {ok: true, data: JSON.parse(jsonValue) as Client};
    } else {
      return {ok: false, data: {} as Client};
    }
  } catch (e) {
    return {ok: false, data: {} as Client};
  }
};

export const deleteClientFromStorage = async (id: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem('client');
    if (jsonValue != null) {
      const data = JSON.parse(jsonValue) as Client;
      if (data.id === id) {
        AsyncStorage.removeItem('client');
      }
    } else {
      return {ok: false, data: {} as Client};
    }
  } catch (e) {
    console.log(e);
    return {ok: false, data: {} as Client};
  }
};
