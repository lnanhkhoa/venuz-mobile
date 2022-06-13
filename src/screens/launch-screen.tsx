import { View, ViewStyle } from 'react-native';
import React, { useState } from 'react';
import { color } from 'theme';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { NavigatorParamList } from 'navigators';

export function LaunchScreen() {
  const navigation = useNavigation<NavigationProp<NavigatorParamList>>();
  const [isReady, setIsReady] = useState(false);
  return <View style={CONTAINER} />;
}

const CONTAINER: ViewStyle = { flex: 1, backgroundColor: color.white };
