import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type ClientStackParamList = {
  Client_Home: undefined;
  Client_Login: undefined;
  Client_SignUp: undefined;
};

export type ClientHomeScreenNavigationProp = NativeStackNavigationProp<
  ClientStackParamList,
  'Client_Home'
>;
