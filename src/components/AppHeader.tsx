import React from 'react';
import {
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import {AppText} from './AppText';
import {Colors} from '../style';

interface IconProps {
  children: JSX.Element;
  onPress?: () => void;
}

interface Props {
  title?: string;
  leftIcon?: IconProps;
  rightIcon?: IconProps;
  middleView?: JSX.Element;
  showLogo?: boolean;
  backgroundColor?: string;
  titleColor?: string;
}

export const AppHeader = (props: Props) => {
  const {
    leftIcon,
    middleView,
    rightIcon,
    showLogo = true,
    backgroundColor,
    title,
    titleColor = Colors.Primary,
  } = props;

  const customMainStyles: StyleProp<ViewStyle> = {
    backgroundColor,
  };

  const renderMiddleView = () => {
    if (showLogo && !middleView) {
      return (
        <AppText
          textAlign="center"
          fontWeight="semibold"
          fontSize={18}
          color={titleColor}>
          {title || 'Super Waiter'}
        </AppText>
      );
    }

    return <View>{middleView && middleView}</View>;
  };

  const renderLeftIcon = () => {
    if (leftIcon) {
      return (
        <TouchableOpacity onPress={leftIcon.onPress}>
          {leftIcon.children}
        </TouchableOpacity>
      );
    }

    return null;
  };

  return (
    <View style={[styles.main, customMainStyles]}>
      <View style={styles.leftView}>{renderLeftIcon()}</View>

      {renderMiddleView()}

      <View style={styles.rightView}>
        {rightIcon && (
          <TouchableOpacity onPress={rightIcon.onPress}>
            {rightIcon.children}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  leftView: {
    position: 'absolute',
    left: '5%',
  },
  rightView: {
    position: 'absolute',
    right: '5%',
  },
});
