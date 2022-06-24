import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen, HomeScreen } from 'screens';

export type AuthNavigatorParamList = {
  LoginScreen: undefined;
  HomeScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

export const AuthNavigators = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
