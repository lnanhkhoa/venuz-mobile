import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen } from 'screens';

export type AuthNavigatorParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createStackNavigator<AuthNavigatorParamList>();

export const AuthNavigators = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
