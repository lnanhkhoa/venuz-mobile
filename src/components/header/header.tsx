import React from 'react';
import { View, ViewStyle, TextStyle } from 'react-native';
import { HeaderProps } from './header.props';
import { Button } from '../button/button';
import { Text } from '../text/text';
import { Icon } from 'components';
import { spacing } from '../../theme';
import { translate } from 'languages';
import { color } from '../../theme/color';

// static styles
const ROOT: ViewStyle = {
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: spacing.large,
  paddingBottom: spacing.large,
  justifyContent: 'flex-start',
};
const TITLE: TextStyle = { textAlign: 'center' };
const TITLE_MIDDLE: ViewStyle = { flex: 1, justifyContent: 'center' };
const LEFT: ViewStyle = { width: 32 };
const RIGHT: ViewStyle = { width: 32 };

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    style,
    titleStyle,
    iconLeftSize,
    iconRightSize,
    rightIconStyle,
  } = props;
  const header = headerText || '';
  const leftIconStyle: ViewStyle = {
    marginRight: spacing.double,
    marginLeft: spacing.double,
  };
  return (
    <View style={[ROOT, style]}>
      {leftIcon ? (
        <Icon
          icon={leftIcon}
          size={iconLeftSize}
          containerStyle={leftIconStyle}
          disable={false}
          onPress={onLeftPress}
          color={color.ink}
        />
      ) : (
        <View style={LEFT} />
      )}
      <View style={TITLE_MIDDLE}>
        <Text style={[TITLE, titleStyle]} text={header} />
      </View>
      {rightIcon ? (
        <Icon
          icon={rightIcon}
          size={iconRightSize}
          containerStyle={rightIconStyle}
          disable={false}
          onPress={onRightPress}
          color={color.ink}
        />
      ) : (
        <View style={RIGHT} />
      )}
    </View>
  );
}
