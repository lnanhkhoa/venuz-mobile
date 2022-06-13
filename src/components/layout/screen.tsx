import { KeyboardAvoidingView, Platform, StyleProp, View, ViewStyle, Keyboard } from 'react-native';
import React from 'react';
import { us } from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Screen({ children, style, unsafe = false, keyboardVerticalOffset }: ScreenProps) {
  const insets = useSafeAreaInsets();
  return (
    <View style={[CONTAINER, !unsafe && { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
      <KeyboardAvoidingView
        onTouchStart={Keyboard.dismiss}
        behavior={Platform.OS === 'ios' ? undefined : 'padding'}
        style={[us.flex1, style]}
        keyboardVerticalOffset={keyboardVerticalOffset}>
        {children}
      </KeyboardAvoidingView>
    </View>
  );
}
const CONTAINER: ViewStyle = { flex: 1 };

interface ScreenProps {
  children: any;
  style?: StyleProp<ViewStyle>;
  unsafe?: boolean;
  keyboardVerticalOffset?: number;
}
