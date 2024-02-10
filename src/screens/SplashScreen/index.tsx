import React, {useEffect} from 'react';
import {changeAuthState} from '@store/Auth/dispatch';

import Splash from 'react-native-splash-screen';

export default function SplashScreen() {
  useEffect(() => {
    setTimeout(() => {
      Splash.hide();
      return changeAuthState(1);
    }, 3000);
  }, []);
  return <></>;
}
