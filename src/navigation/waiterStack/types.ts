import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

export type WaiterStackParamList = {
  Rooms: undefined;
  AddRoom: undefined;
  Profile: undefined;
};

export type WaiterHomeScreenNavigationProp = BottomTabNavigationProp<
  WaiterStackParamList,
  'Rooms'
>;
