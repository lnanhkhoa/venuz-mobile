import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'components';
//
import { HomeScreen, SettingScreen, WishlistScreen, StoreScreen } from 'screens';
import { BottomTabBar } from './components/bottom-tabbar';

export type BottomNavigatorParamList = {
  HomeScreen: undefined;
  StoreScreen: undefined;
  WishlistScreen: undefined;
  SettingScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      tabBar={props => <BottomTabBar {...props} />}
      detachInactiveScreens
      screenOptions={{
        headerShown: false,
        lazy: true,
      }}>
      <BottomTab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: () => <Icon icon="home" size={25} />,
        }}
      />
      <BottomTab.Screen
        name="StoreScreen"
        component={StoreScreen}
        options={{
          tabBarIcon: () => <Icon icon="more-app" size={25} />,
          lazy: false,
        }}
      />
      <BottomTab.Screen
        name="WishlistScreen"
        component={WishlistScreen}
        options={{
          tabBarIcon: () => <Icon icon="like" size={25} />,
        }}
      />
      <BottomTab.Screen
        name="SettingScreen"
        component={SettingScreen}
        options={{
          tabBarIcon: () => <Icon icon="people" size={25} />,
        }}
      />
    </BottomTab.Navigator>
  );
};
