import * as React from 'react';
import { TouchableOpacity, View, ViewStyle, StyleProp, TextStyle } from 'react-native';
import { color, spacing } from 'theme';
import { TxKeyPath } from 'languages';
import { Text, Icon } from 'components';

export interface CheckboxProps {
  style?: StyleProp<ViewStyle>;
  outlineStyle?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  value: boolean;
  disabled?: boolean;
  text?: string;
  tx?: TxKeyPath;
  children?: React.ReactNode;
  onPress?: (newValue: boolean) => void;
}

export function Checkbox({
  onPress,
  value = false,
  text,
  tx,
  children,
  disabled = false,
  outlineStyle,
  containerStyle,
  contentStyle,
  textStyle,
}: CheckboxProps) {
  const content = children || <Text tx={tx} text={text} style={textStyle} />;
  const rootStyle = [ROOT];
  const outlineStyles = [OUTLINE, disabled && ({ opacity: 0.7 } as ViewStyle), outlineStyle];

  const onPressBtn = () => onPress && onPress(!value);

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={disabled}
      onPress={onPressBtn}
      style={containerStyle}>
      <View style={rootStyle}>
        <View style={outlineStyles}>
          {value && (
            <View style={CHECK}>
              <Icon icon="checked" size={22} style={{ tintColor: color.background }} />
            </View>
          )}
        </View>
        <View style={[CONTENT, contentStyle]}>{content}</View>
      </View>
    </TouchableOpacity>
  );
}

const DIMENSIONS = { width: 20, height: 20 };
const ROOT: ViewStyle = {
  flexDirection: 'row',
};
const OUTLINE: ViewStyle = {
  ...DIMENSIONS,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: color.line,
  borderRadius: 4,
  marginRight: spacing.medium,
};
const CHECK: ViewStyle = {
  position: 'absolute',
  flex: 1,
};

const CONTENT: ViewStyle = {
  flex: 1,
};
