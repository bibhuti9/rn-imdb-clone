import {useEffect} from 'react';
import {Appearance} from 'react-native';

import {ThemeMode, createTheme, useTheme} from '@rneui/themed';
import {Spacing, darkColors, lightColor} from './colors';

export const currentColorScheme = Appearance.getColorScheme();

export const theme = createTheme({
  lightColors: lightColor,
  darkColors: darkColors,
  mode: currentColorScheme,
  spacing: Spacing,
});

export const colorSchemeChangeListeners = () => {
  const {updateTheme} = useTheme();

  useEffect(() => {
    const colorSchemeChangeListener = ({colorScheme}) => {
      updateTheme(() => ({
        mode: colorScheme,
      }));
    };
    Appearance.addChangeListener(colorSchemeChangeListener);
    return () => {
      Appearance.removeChangeListener(colorSchemeChangeListener);
    };
  }, []);
};

export const updateThemes = mode => {
  const {updateTheme} = useTheme();
  updateTheme(() => ({
    mode: mode as ThemeMode,
  }));
};
