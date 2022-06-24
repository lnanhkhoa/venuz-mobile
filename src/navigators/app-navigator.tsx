import React from 'react';
import { useColorScheme } from 'react-native';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
//
import { navigationRef } from './navigation-utilities';
import { useAuth } from 'services';
import { AuthNavigators } from './auth-navigator';
import { MainNavigators } from './main-navigator';

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>;

export const AppNavigator = (props: NavigationProps) => {
  const colorScheme = useColorScheme();
  const auth = useAuth();

  return (
    <NavigationContainer
      ref={navigationRef}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      {...props}>
      {!auth.authData ? <MainNavigators /> : <AuthNavigators />}
    </NavigationContainer>
  );
};

AppNavigator.displayName = 'AppNavigator';

const exitRoutes = ['HomeScreen'];
export const canExit = (routeName: string) => exitRoutes.includes(routeName);
