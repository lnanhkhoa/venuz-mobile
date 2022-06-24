import * as React from 'react';
import { ImageStyle, Image, TouchableOpacity } from 'react-native';
import { IconProps } from './icon.props';
import { icons } from './icons';

export function Icon(props: IconProps) {
  const { style: styleOverride, icon, containerStyle, size, color, onPress, disable } = props;
  const disableIcon = disable ?? true;
  let sizeProps;
  if (size) {
    sizeProps = { width: size, height: size };
  }

  let colorProps;
  if (color) {
    colorProps = { tintColor: color };
  }

  return (
    <TouchableOpacity style={containerStyle} onPress={onPress} disabled={disableIcon}>
      <Image
        style={[sizeProps, colorProps, styleOverride]}
        source={icons[icon]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}
