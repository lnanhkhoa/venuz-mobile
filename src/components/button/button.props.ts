import React from 'react';
import { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from 'react-native';
import { ButtonPresetNames } from './button.presets';
import { TxKeyPath } from 'languages';

export interface ButtonProps extends TouchableOpacityProps {
  /**
   * Text which is looked up via i18n.
   */
  tx?: TxKeyPath;

  /**
   * The text to display if not using `tx` or nested components.
   */
  text?: string;

  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>;

  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional style override useful for the button text.
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Disable text style
   */
  disableStyle?: StyleProp<ViewStyle>;

  /**
   * Disable text style
   */
  disableTextStyle?: StyleProp<TextStyle>;

  /**
   * One of the different types of text presets.
   */
  preset?: ButtonPresetNames;

  /**
   * One of the different types of text presets.
   */
  children?: React.ReactNode;

  onLeftPress?: () => void;
  onPress?: () => void;

  /**
   * Disable button
   */
  disabled?: boolean;

  /**
   * Fetching
   */
  fetching?: boolean;
  isDarkFetching?: boolean;
  leftIcon?: string;
  rightIcon?: string;
  iconLeftSize?: number;
  iconRightSize?: number;
}
