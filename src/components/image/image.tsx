import React from 'react';
import {
  View,
  Image as RNImage,
  ImageProps as RNImageProps,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ImageTypes, images } from './images';

interface ImageProps extends RNImageProps {
  name?: ImageTypes;
  containerStyles?: StyleProp<ViewStyle>;
}

export const Image = ({ name, source, containerStyles, ...rest }: ImageProps) => (
  <View style={containerStyles}>
    <RNImage {...rest} source={images[name] || source} />
  </View>
);
