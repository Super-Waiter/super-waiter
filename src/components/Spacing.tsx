import React from 'react';
import {View, ViewStyle, StyleProp} from 'react-native';

interface Props {
  vertical?: number;
  horizontal?: number;
}

export const Spacing = ({horizontal = 5, vertical = 5}: Props) => {
  const styles: StyleProp<ViewStyle> = {
    marginHorizontal: horizontal,
    marginVertical: vertical,
  };

  return <View style={styles} />;
};
