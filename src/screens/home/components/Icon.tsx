import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconT } from '../types';

const Icon = ({ color, name, size, style }: IconT) => (
  <Ionicons name={name} size={size} color={color} style={style} />
);

export default Icon;
