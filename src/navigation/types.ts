import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Client: undefined;
  Waiter: undefined;
  Scanner: undefined;
};

export type ScannerScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'Scanner'
>;
