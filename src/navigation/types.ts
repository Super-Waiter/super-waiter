import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Client: undefined;
  Waiter: undefined;
  Scanner: undefined;
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
