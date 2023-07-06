import {Image} from 'react-native';
import {Food, FOOD_STATUS, Room, ROOM_STATUS} from '../model';

export const tempFoodData: Food[] = [
  {
    id: '1',
    description: 'Lorem .....',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
  {
    id: '2',
    description: 'Lorem .....',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
];

export const tempRoomData: Room[] = [
  {
    id: '1',
    name: 1,
    status: ROOM_STATUS.EMPTY,
  },
  {
    id: '3',
    name: 3,
    status: ROOM_STATUS.BUSY,
  },
  {
    id: '4',
    name: 4,
    status: ROOM_STATUS.CALLING,
  },
  {
    id: '2',
    name: 2,
    status: ROOM_STATUS.BOOKED,
  },
  {
    id: '5',
    name: 5,
    status: ROOM_STATUS.BUSY,
  },
  {
    id: '6',
    name: 6,
    status: ROOM_STATUS.EMPTY,
  },
  {
    id: '7',
    name: 7,
    status: ROOM_STATUS.CALLING,
  },
];
