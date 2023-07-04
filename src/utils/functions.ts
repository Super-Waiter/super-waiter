import {FontWeight} from '../model';
import {Fonts} from '../style';

export const resolveFontWeight = (weight: FontWeight) => {
  switch (weight) {
    case 'bold':
      return Fonts.primaryBold;
    case 'semibold':
      return Fonts.primarySemibold;
    default:
      return Fonts.primaryRegular;
  }
};
