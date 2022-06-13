import { TextStyle } from 'react-native';
import { color, typography } from '../../theme';

/**
 * All text will start off looking like this.
 */
const BASE: TextStyle = {
  fontFamily: typography.primary,
  fontSize: 16,
  color: color.text,
};
type FontFamilyType = keyof typeof typography;

function setTypography(
  fontFamily: FontFamilyType,
  fontSize: number,
  lineHeight: number,
  fontWeight?: string
) {
  return {
    fontFamily: typography[fontFamily],
    fontSize,
    lineHeight,
    fontWeight,
  } as TextStyle;
}

/**
 * All the variations of text styling within the app.
 *
 * You want to customize these to whatever you need in your app.
 */
export const presets = {
  /**
   * The default text styles.
   */
  default: BASE,
  large: setTypography('bold', 32, 38),
  h1: setTypography('bold', 28, 32),
  h2: setTypography('semiBold', 24, 28),
  h3: setTypography('medium', 20, 24),
  h4: setTypography('regular', 18, 22),
  h5: setTypography('regular', 16, 20),
  h6: setTypography('regular', 14, 18),
  medium: setTypography('regular', 13, 18),
  small: setTypography('regular', 12, 18),

  errorText: {
    ...setTypography('regular', 16, 20),
    color: color.red,
  } as TextStyle,
};

/**
 * A list of preset names.
 */
export type TextPresets = keyof typeof presets;
