import * as React from 'react';
import { TouchableOpacity, ViewStyle, ActivityIndicator, View } from 'react-native';
//
import { Icon, Text } from 'components';
import { viewPresets, textPresets } from './button.presets';
import { ButtonProps } from './button.props';
//
import { color, spacing } from 'theme';

const LEFT: ViewStyle = { width: 32 };
const leftIconStyle: ViewStyle = { marginRight: spacing.base, marginLeft: spacing.double };
const rightIconStyle: ViewStyle = { marginLeft: spacing.base, marginRight: spacing.double };
const RIGHT: ViewStyle = { width: 32 };
const CONTAINER: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  alignSelf: 'center',
};
const LOADING: ViewStyle = {
  marginRight: spacing.base,
};
const ROOT: ViewStyle = {
  flexDirection: 'row',
};
export function Button(props: ButtonProps) {
  const {
    preset = 'primary',
    tx,
    disabled = false,
    style: styleOverride,
    containerStyle,
    text,
    textStyle: textStyleOverride,
    disableStyle,
    disableTextStyle,
    children,
    fetching,
    isDarkFetching = false,
    onPress,
    onLeftPress,
    leftIcon,
    rightIcon,
    iconLeftSize,
    iconRightSize,
    ...rest
  } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const textStyle = textPresets[preset] || textPresets.primary;
  const textStyles = [
    textStyle,
    textStyleOverride,
    disabled ? disableTextStyle || textPresets.disabled : null,
  ];
  const content = children || <Text tx={tx} text={text} style={textStyles} />;

  const viewStyles = [
    CONTAINER,
    viewStyle,
    disabled ? disableStyle || viewPresets.disabled : null,
    styleOverride,
  ];

  return (
    <TouchableOpacity
      disabled={disabled || fetching}
      style={[ROOT, containerStyle]}
      {...rest}
      onPress={onPress}>
      <View style={viewStyles}>
        {leftIcon && !fetching ? (
          <Icon icon={leftIcon} size={iconLeftSize} containerStyle={leftIconStyle} />
        ) : (
          <View style={LEFT} />
        )}
        {fetching && (
          <ActivityIndicator style={LOADING} color={isDarkFetching ? color.black : color.white} />
        )}
        {content}
        {rightIcon ? (
          <Icon icon={rightIcon} size={iconRightSize} containerStyle={rightIconStyle} />
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    </TouchableOpacity>
  );
}
