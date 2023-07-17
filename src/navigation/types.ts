import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Client: undefined;
  Waiter: undefined;
  Scanner: undefined;
  SignupWaiter: undefined;
  RoomDetails: {id: string};
};

export type ScannerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Scanner'
>;
export type RoomDetailsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'RoomDetails'
>;

export type WaiterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Waiter'
>;

export type SignupWaiterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'SignupWaiter'
>;

export type ClientScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Client'
>;
