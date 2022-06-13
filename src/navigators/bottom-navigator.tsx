import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
//
import { HomeScreen } from 'screens';

export type BottomNavigatorParamList = {
  HomeScreen: undefined;
  SettingScreen: undefined;
};

const BottomTab = createBottomTabNavigator<BottomNavigatorParamList>();

export const BottomNavigator = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <BottomTab.Group>
        <BottomTab.Screen name="HomeScreen" component={HomeScreen} />
        <BottomTab.Screen name="SettingScreen" component={HomeScreen} />
      </BottomTab.Group>
    </BottomTab.Navigator>
  );
};
