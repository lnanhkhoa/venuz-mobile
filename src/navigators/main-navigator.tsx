import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WishlistScreen } from '../screens';
import { BottomNavigator } from './bottom-navigator';

export type MainNavigatorParamList = {
  WishlistScreen: undefined;
  BottomNavigator: undefined;
};

const Stack = createNativeStackNavigator<MainNavigatorParamList>();

export const MainNavigators = () => {
  return (
    <Stack.Navigator
      initialRouteName="BottomNavigator"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal',
          headerShown: false,
        }}>
        <Stack.Screen name="WishlistScreen" component={WishlistScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
