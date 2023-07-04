import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type WaiterStackParamList = {
  Waiter_Home: undefined;
  Waiter_Login: undefined;
  Waiter_SignUp: undefined;
};

export type WaiterHomeScreenNavigationProp = NativeStackNavigationProp<
  WaiterStackParamList,
  'Waiter_Home'
>;
