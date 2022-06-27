import { Pressable, StyleProp, View, ViewStyle } from 'react-native';
import React from 'react';
import { Icon } from 'components';
import { uf, us } from 'theme';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { AppConstants } from 'configs';

const ACTIVE_COLOR = '#FF5C00';
function useStyle({ insets }) {
  const containerStyle: StyleProp<ViewStyle> = [
    us.rowAlign,
    uf.setBg('white'),
    {
      marginBottom: insets.bottom,
      minHeight: AppConstants.bottomViewHeight,
      alignItems: 'center',
    },
  ];

  return { containerStyle };
}

export function BottomTabBar(props: BottomTabBarProps) {
  const { state, insets, navigation } = props;
  const { index } = state;
  const { containerStyle } = useStyle({ insets });

  const onPressHome = () => navigation.navigate('HomeScreen');
  const onPressStore = () => navigation.navigate('StoreScreen');
  const onPressWishlist = () => navigation.navigate('WishlistScreen');
  const onPressSetting = () => navigation.navigate('SettingScreen');

  const activeStyle = id => (index === id ? ACTIVE_COLOR : undefined);

  return (
    <View style={containerStyle}>
      <Pressable style={[us.flex1, us.itemsCenter]} onPress={onPressHome}>
        <Icon icon="home" size={25} color={activeStyle(0)} />
      </Pressable>
      <Pressable style={[us.flex1, us.itemsCenter]} onPress={onPressStore}>
        <Icon icon="more-app" size={25} color={activeStyle(1)} />
      </Pressable>
      <Pressable style={[us.flex1, us.itemsCenter]} onPress={onPressWishlist}>
        <Icon icon="like" size={25} color={activeStyle(2)} />
      </Pressable>
      <Pressable style={[us.flex1, us.itemsCenter]} onPress={onPressSetting}>
        <Icon icon="people" size={25} color={activeStyle(3)} />
      </Pressable>
    </View>
  );
}
