import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
  ActivityIndicator,
  DimensionValue,
} from 'react-native';
import {FontWeight} from '../model';
import {Colors, Fonts, Shadows} from '../style';
import {resolveFontWeight} from '../utils/functions';

interface Props {
  title: string;
  color?: string;
  backgroundColor?: string;
  fontSize?: number;
  fontWeight?: FontWeight;
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  onPress: () => void;
  isTextButton?: boolean;
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  borderRadius?: number;
  isLoading?: boolean;
}

export const AppButton = (props: Props) => {
  const {
    title = '',
    color = Colors.White,
    backgroundColor = Colors.Primary,
    fontSize = Fonts.base,
    fontWeight = 'regular',
    width = '100%',
    height = 45,
    onPress,
    textAlign = 'auto',
    isTextButton = false,
    borderRadius = 5,
    isLoading = false,
  } = props;

  const buttonStyles: StyleProp<ViewStyle> = {
    backgroundColor,
    width,
    height,
    borderRadius,
  };

  const textStyles: StyleProp<TextStyle> = {
    color,
    fontSize,
    // fontFamily: resolveFontWeight(fontWeight),
    textAlign,
  };

  if (isTextButton) {
    return (
      <TouchableOpacity onPress={onPress} disabled={isLoading}>
        <Text style={[styles.btnText, textStyles]}>{title}</Text>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      onPress={onPress}
      disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color={Colors.White} />
      ) : (
        <Text style={[styles.btnText, textStyles]}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 10,

    borderWidth: 0.5,
    borderColor: Colors.LightGrey,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

    ...Shadows.Shadowed,
  },
  btnText: {
    color: Colors.White,
  },
});
