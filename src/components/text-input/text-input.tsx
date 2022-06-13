import React, { ReactChild, ReactNode } from 'react';
import {
  StyleProp,
  TextInput as TextInputReactNative,
  TextInputProps as TextInputPropsReactNative,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { color, spacing, typography, us } from 'theme';
import { Text } from '../text/text';
import { IconTypes } from '../icon/icons';
import { Icon } from '../icon/icon';
import { presets } from 'components/text/text.presets';

export interface TextInputProps extends TextInputPropsReactNative {
  placeholder?: string;

  label?: string;
  labelStyle?: StyleProp<ViewStyle>;

  prefix?: string;
  style?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  inputContainer?: StyleProp<ViewStyle>;
  preset?: keyof typeof PRESETS;
  icon?: IconTypes;
  forwardedRef?: any;
  rightComponent?: ReactNode | ReactChild;
  error?: string;
}

/**
 * A component which has a label and an input together.
 */
export function TextInput({
  placeholder,
  label,
  labelStyle,
  prefix,
  preset = 'default',
  icon,
  error,
  style: styleOverride,
  inputStyle: inputStyleOverride,
  inputContainer,
  forwardedRef,
  rightComponent,
  secureTextEntry = false,
  ...rest
}: TextInputProps) {
  const containerStyles = [CONTAINER, PRESETS[preset], styleOverride];
  const inputContainerStyles = [INPUT_CONTAINER, inputContainer];

  const colorTextInput = secureTextEntry ? color.ink : color.ink;
  const inputStyles = [INPUT, { color: colorTextInput }, inputStyleOverride];
  const actualPlaceholder = placeholder;

  return (
    <View style={containerStyles}>
      <Text preset="default" style={labelStyle} text={label} color={color.ink} />
      <View style={inputContainerStyles}>
        {icon && <Icon icon={icon} size={20} color={color.ink} containerStyle={us.mxMedium} />}
        {prefix && (
          <Text text={prefix} preset={'default'} color={colorTextInput} style={us.mrTiny} />
        )}
        <TextInputReactNative
          {...rest}
          placeholder={actualPlaceholder}
          underlineColorAndroid={color.transparent}
          textAlignVertical="center"
          style={inputStyles}
          ref={forwardedRef}
          secureTextEntry={secureTextEntry}
        />
        {rightComponent}
      </View>
      {error ? <Text style={ERROR_TEXT} text={error} /> : null}
    </View>
  );
}

// the base styling for the container
const CONTAINER: ViewStyle = {
  paddingBottom: spacing.medium,
};

// the base styling for the TextInput
const INPUT: TextStyle = {
  flex: 1,
  ...presets['text-large'],
  lineHeight: undefined,
  color: color.ink,
};
const INPUT_CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  backgroundColor: color.white,
};
const ERROR_TEXT: TextStyle = {
  fontFamily: typography.regular,
  fontSize: 14,
  color: color.red,
};

// currently we have no presets, but that changes quickly when you build your app.
const PRESETS = {
  default: {},
};
