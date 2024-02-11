import React, {useEffect} from 'react';
import {changeAuthState} from '@store/Auth/dispatch';

import Splash from 'react-native-splash-screen';
import {store} from '@store/index';
import {movies} from '@reference/index';

export default function SplashScreen() {
  useEffect(() => {
    Splash.hide();
    store.addMovies(movies);
    return changeAuthState(1);
  }, []);
  return <></>;
}
