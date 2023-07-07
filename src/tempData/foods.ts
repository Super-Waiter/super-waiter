import {Image} from 'react-native';
import {Food, FOOD_STATUS} from '../model';

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
