import * as React from 'react';
import { TouchableOpacity, ViewStyle, ActivityIndicator, View } from 'react-native';
//
import { Icon, Text } from 'components';
import { viewPresets, btnTextPresets } from './button.presets';
import { ButtonProps } from './button.props';
//
import { color, spacing } from 'theme';

const LEFT: ViewStyle = { width: 32 };
const leftComponentStyle: ViewStyle = { marginRight: spacing.base, marginLeft: spacing.double };
const rightComponentStyle: ViewStyle = { marginLeft: spacing.base, marginRight: spacing.double };
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
    iconLeftColor,
    iconRightSize,
    iconRightColor,

    ...rest
  } = props;

  const viewStyle = viewPresets[preset] || viewPresets.primary;
  const textStyle = btnTextPresets[preset] || btnTextPresets.primary;
  const textStyles = [
    textStyle,
    textStyleOverride,
    disabled ? disableTextStyle || btnTextPresets.disabled : null,
  ];
  const content = children || <Text text={text} style={textStyles} />;

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
          <Icon
            icon={leftIcon}
            size={iconLeftSize}
            color={iconLeftColor}
            containerStyle={leftComponentStyle}
          />
        ) : (
          <View style={LEFT} />
        )}
        {fetching && (
          <ActivityIndicator style={LOADING} color={isDarkFetching ? color.black : color.white} />
        )}
        {content}
        {rightIcon ? (
          <Icon
            icon={rightIcon}
            size={iconRightSize}
            color={iconRightColor}
            containerStyle={rightComponentStyle}
          />
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    </TouchableOpacity>
  );
}
