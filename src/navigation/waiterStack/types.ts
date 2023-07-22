import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type WaiterStackParamList = {
  Rooms: undefined;
  Chats: undefined;
  Menu: undefined;
  Profile: undefined;
};

export type WaiterHomeScreenNavigationProp = BottomTabNavigationProp<
  WaiterStackParamList,
  'Rooms'
>;
