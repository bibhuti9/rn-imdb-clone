import React, {useEffect} from 'react';
import {changeAuthState} from '@store/Auth/dispatch';

import Splash from 'react-native-splash-screen';
import {syncAppData} from '@api/batch';

export default function SplashScreen() {
  useEffect(() => {
    Splash.hide();
    // store.addMovies(movies);
    syncAppData();
    return changeAuthState(1);
  }, []);
  return <></>;
}
