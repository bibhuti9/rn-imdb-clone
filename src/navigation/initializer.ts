import {AppRegistry} from 'react-native';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

import NavigatorContainer from './index';
import {provider} from '@theme/provider';

// Helps to Wrap the NavigationContainer to gesture HOC
export function createRootContainer() {
  return AppRegistry.registerComponent('imdb', () =>
    gestureHandlerRootHOC(provider(NavigatorContainer)),
  );
}
