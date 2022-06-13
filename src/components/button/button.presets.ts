import { ViewStyle, TextStyle } from 'react-native';
import { color } from 'theme';
import { presets as TextPresets } from '../text/text.presets';

const BASE_CONTAINER: ViewStyle = {
  padding: 16,
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  borderRadius: 50,
};

export const viewPresets = {
  primary: {
    ...BASE_CONTAINER,
  } as ViewStyle,

  disabled: {
    ...BASE_CONTAINER,
    backgroundColor: color['white-300'],
  } as ViewStyle,
};

const BASE_TEXT_STYLE: TextStyle = TextPresets['heading-4'];
export const textPresets: Record<ButtonPresetNames, TextStyle> = {
  primary: {
    ...BASE_TEXT_STYLE,
    color: color.text,
  } as TextStyle,

  disabled: {
    ...BASE_TEXT_STYLE,
    color: color.text,
  } as TextStyle,
};

export type ButtonPresetNames = keyof typeof viewPresets;