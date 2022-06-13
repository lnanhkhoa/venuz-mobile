import { ImageStyle, StyleProp, ViewStyle } from 'react-native';

export interface IconProps {
  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */

  containerStyle?: StyleProp<ViewStyle>;

  /**
   * The name of the icon
   */
  icon: string;

  /**
   * Size of the icon
   */
  size?: number;

  /**
   * TintColor of the icon
   */
  color?: string;
  disable?: boolean;
  onPress?: () => void;
}
