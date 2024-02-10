import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {navigationRef} from '@utils/navigation';

import {colorSchemeChangeListeners} from '@theme/index';
import AuthNavigators from '@navigators/AuthNavigators';

export default function NavigatorContainer(): JSX.Element {
  colorSchemeChangeListeners();

  return (
    <NavigationContainer ref={navigationRef}>
      <AuthNavigators />
    </NavigationContainer>
  );
}
