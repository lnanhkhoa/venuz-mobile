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
  RightIcon?: () => React.ReactNode;

  onRightPress?(): void;

  style?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;

  leftIconStyle?: StyleProp<ViewStyle>;
  iconLeftSize?: number;
  rightIconStyle?: StyleProp<ViewStyle>;
  unsafe?: boolean
}
