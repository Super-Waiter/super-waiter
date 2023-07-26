import {Image} from 'react-native';
import {Food, FOOD_STATUS} from '../model';

export const tempFoodData: Food[] = [
  {
    id: '1',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
  {
    id: '2',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
  {
    id: '3',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
  {
    id: '4',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
  {
    id: '5',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    images: [
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
      Image.resolveAssetSource(require('../../assets/images/food.jpeg')).uri,
    ],
    price: 300,
    status: FOOD_STATUS.IN_STOCK,
    title: 'Burger',
  },
];
