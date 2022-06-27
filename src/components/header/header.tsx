import React from 'react';
import { View, ViewStyle, TextStyle, Pressable } from 'react-native';
import { HeaderProps } from './header.props';
import { Text } from '../text/text';
import { Icon } from 'components';
import { spacing } from '../../theme';
import { color } from '../../theme/color';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { AppConstants } from 'configs';

// static styles
const ROOT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingHorizontal: spacing.double,
  minHeight: AppConstants.headerHeight,
};
const TITLE: TextStyle = { textAlign: 'center' };
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: 'center' };
const LEFT: ViewStyle = { width: 32 };
const RIGHT: ViewStyle = { minWidth: 32 };

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    RightIcon,
    rightIconStyle,
    leftIcon,
    headerText,
    style,
    titleStyle,
    iconLeftSize,
    unsafe,
  } = props;
  const insets = useSafeAreaInsets();
  const header = headerText || '';
  const leftIconStyle: ViewStyle = {
    marginRight: spacing.double,
    marginLeft: spacing.double,
  };
  return (
    <View style={[ROOT, !unsafe && { marginTop: insets.top }, style]}>
      {leftIcon ? (
        <Icon
          icon={leftIcon}
          size={iconLeftSize}
          containerStyle={leftIconStyle}
          disable={false}
          onPress={onLeftPress}
          color={color.black}
        />
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={header} />
      </View>
      <View style={RIGHT}>
        {RightIcon && (
          <Pressable onPress={onRightPress} style={rightIconStyle}>
            <RightIcon />
          </Pressable>
        )}
      </View>
    </View>
  );
}
