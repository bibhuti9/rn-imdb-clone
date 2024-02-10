import React from 'react';
import {observer} from 'mobx-react';

import AppStack from './AppStack';

import {store} from '@store/index';
import SplashScreen from '@screens/SplashScreen';

function AuthNavigators() {
  switch (store.authState.currentAuthState) {
    case 0:
      return <SplashScreen />;
    case 1:
      return <AppStack />;
    default:
      return <SplashScreen />;
  }
}
export default observer(AuthNavigators);
