import { View, ViewStyle, TextStyle } from 'react-native';
import React from 'react';
import { Icon, Screen, Text, TextInput } from 'components';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function SettingScreen() {
  const insets = useSafeAreaInsets();
  return (
    <Screen unsafe>
      <Text>SettingScreen</Text>
    </Screen>
  );
}
const CONTAINER: ViewStyle = {};
