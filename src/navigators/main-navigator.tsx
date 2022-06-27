import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CheckoutScreen } from '../screens';
import { BottomNavigator } from './bottom-navigator';

export type MainNavigatorParamList = {
  BottomNavigator: undefined;
  CheckoutScreen: undefined;
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
        <Stack.Screen name="CheckoutScreen" component={CheckoutScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
