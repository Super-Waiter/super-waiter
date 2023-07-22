import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Client: undefined;
  Waiter: undefined;
  Scanner: undefined;
  Login: undefined;
  Rooms: undefined;
  RoomDetails: {id: string};
  ChatScreen: {id: string};
};

export type ScannerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Scanner'
>;
// export type RoomDetailsScreenNavigationProp = NativeStackNavigationProp<
//   RootStackParamList,
//   'RoomDetails'
// >;

export type RoomDetailsScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'RoomDetails',
  'Rooms'
>;

export type ChatScreenScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'RoomDetails',
  'Rooms'
>;

export type WaiterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Waiter'
>;

export type LoginWaiterScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Login'
>;

export type ClientScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Client'
>;

export type RooomsScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Rooms'
>;
