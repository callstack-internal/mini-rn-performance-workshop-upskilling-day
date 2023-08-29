import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'

import {BottomTabNavigator} from '~navigation/bottom-tab-navigator';
import {usePredefinedSharedValue} from '~components/shimmers/shimmer-effect-provider/useSharedValue';

const queryClient = new QueryClient();

const App = () => {
  usePredefinedSharedValue();
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <BottomTabNavigator />
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
