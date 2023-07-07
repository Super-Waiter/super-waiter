import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  color?: string;
}

export const BackIcon = (props: Props) => {
  const {color} = props;

  return <Ionicons name="chevron-back" size={24} color={color} />;
};
