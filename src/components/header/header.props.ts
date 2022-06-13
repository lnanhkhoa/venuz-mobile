import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { IconTypes } from '../icon/icons';

export interface HeaderProps {
  /**
   * header non-i18n
   */
  headerText?: string;

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes;

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void;

  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes;

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>;
  iconLeftSize?: number;
  leftIconStyle?: StyleProp<ViewStyle>;
  iconRightSize?: number;
  rightIconStyle?: StyleProp<ViewStyle>;
}
