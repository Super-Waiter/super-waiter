import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface Props {
  color?: string;
}

export const CloseIcon = (props: Props) => {
  const {color} = props;

  return <Ionicons name="close" size={24} color={color} />;
};
