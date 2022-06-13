import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
//
import { navigationRef } from './navigation-utilities';
import { useAuth } from 'services';
import { AuthNavigators, AuthNavigatorParamList } from './auth-navigator';
import { BottomNavigator, BottomNavigatorParamList } from './bottom-navigator';

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const auth = useAuth();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      {auth.authData ? <BottomNavigator /> : <AuthNavigators />}
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['HomeScreen'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
