import React from 'react';
import {Text as RNText, StyleProp, TextStyle} from 'react-native';
import {FontWeight} from '../model';
import {resolveFontWeight} from '../utils/functions';

interface Props {
  color?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
  text?: string | number;
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | undefined;
  children?: any;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  numberOfLines?: number;
}

export const AppText = ({
  color = 'black',
  fontSize = 16,
  fontWeight = 'regular',
  text = '',
  children,
  textTransform,
  textAlign = 'auto',
  numberOfLines = undefined,
}: Props) => {
  const textStyles: StyleProp<TextStyle> = {
    fontSize,
    color,
    fontFamily: resolveFontWeight(fontWeight),
    textTransform,
    textAlign,
  };

  return (
    <RNText numberOfLines={numberOfLines} style={[textStyles]}>
      {children || text}
    </RNText>
  );
};
