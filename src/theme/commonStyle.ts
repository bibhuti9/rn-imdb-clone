import {Platform, StyleSheet} from 'react-native';

import {sizes} from './colors';
import {useTheme} from '@rneui/themed';
export const getShadow = (elevation: number) => {
  const {theme} = useTheme();
  return Platform.select({
    ios: {
      zIndex: elevation,
      shadowColor: '#000',
      shadowOpacity: 0.0015 * elevation + 0.18,
      shadowRadius: 0.54 * elevation,
      shadowOffset: {
        width: 1,
        height: 1,
      },
    },
    android: {
      elevation: elevation,
      shadowColor: theme.colors.black,
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.1,
      shadowRadius: 20,
    },
  });
};

export const commonStyle = StyleSheet.create({
  contianer: {
    padding: sizes.padding + 5,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  buttonSquare: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
