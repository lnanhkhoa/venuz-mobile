import './utils/ignore-warnings';
import React from 'react';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { ErrorBoundary } from 'components/handlers';
import Root from 'screens/root/root';
import { AppNavigator, canExit, useBackButtonHandler } from 'navigators';
import { us } from 'theme';
import { AuthProvider } from 'services';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

/**
 * This is the root component of our app.
 */
function App() {
  useBackButtonHandler(canExit);
  return (
    <GestureHandlerRootView style={us.flex1}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <AuthProvider>
          <ErrorBoundary catchErrors={'always'}>
            <Root>
              <AppNavigator />
            </Root>
          </ErrorBoundary>
        </AuthProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
export default App;
