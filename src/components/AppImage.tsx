import React from 'react';
import {StyleProp, StyleSheet} from 'react-native';
import FastImage, {ImageStyle} from 'react-native-fast-image';

interface Props {
  uri: string;
  customStyle?: StyleProp<ImageStyle>;
}

export const AppImage = (props: Props) => {
  const {uri, customStyle} = props;

  return (
    <FastImage
      source={{
        uri: uri,
        priority: FastImage.priority.high,
        cache: FastImage.cacheControl.web,
      }}
      style={customStyle || styles.img}
      onLoadEnd={() => console.log('FastImage loaded')}
      fallback={true}
    />
  );
};

const styles = StyleSheet.create({
  img: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    borderRadius: 5,
  },
});
