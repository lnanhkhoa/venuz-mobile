import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import React from 'react';
import { Icon } from 'components';
import { us } from 'theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
const ACTIVE_COLOR = '#FF5C00';

export function BottomTabBar(props: BottomTabBarProps) {
  const { descriptors, state, insets, navigation } = props;
  const { index } = state;

  const CONTAINER: StyleProp<ViewStyle> = [
    us.rowAlign,
    { paddingBottom: insets.bottom, minHeight: 100, alignItems: 'center' },
  ];

  return (
    <View style={CONTAINER}>
      <TouchableOpacity
        style={[us.flex1, us.itemsCenter]}
        onPress={() => navigation.navigate('HomeScreen')}>
        <Icon icon="home" size={25} color={index === 0 ? ACTIVE_COLOR : undefined} />
      </TouchableOpacity>
      <TouchableOpacity style={[us.flex1, us.itemsCenter]} onPress={() => {}}>
        <Icon icon="more-app" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[us.flex1, us.itemsCenter]}
        onPress={() => navigation.navigate('WishlistScreen')}>
        <Icon icon="like" size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[us.flex1, us.itemsCenter]}
        onPress={() => navigation.navigate('SettingScreen')}>
        <Icon icon="people" size={25} color={index === 1 ? ACTIVE_COLOR : undefined} />
      </TouchableOpacity>
    </View>
  );
}
