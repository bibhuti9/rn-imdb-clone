import {ThemeMode} from '@rneui/themed';
import {Dimensions} from 'react-native';
import {EdgeInsets} from 'react-native-safe-area-context';
const {width, height} = Dimensions.get('screen');

export const ASPECT_RATIO = width / 360;

export enum Font {  
  'PoppinsRegular' = 'Poppins-Regular',
  'KaushanScriptRegular' = 'KaushanScript-Regular',
}

const baseColors = {
  primary: '#1575d9',
  secondary: '#FBB159',
  success: '#4DB740', //70C04F
  error: '#D53D32', //FF0000
  warning: '#EC8A00',
  grey: '#F5F9FF',
  searchBg: '#9B9B9B',
};

export interface ColorType {
  primary: string;
  primaryDark?: string;
  primaryLight?: string;
  primaryLight2?: string;
  secondary: string;
  gray: string;
  grey0: string;
  grey1: string;
  grey2: string;
  grey3: string;
  grey5: string;
  greyLight: string;
  greyOutline: string;
  disabled: string;
  divider: string;
  searchBg: string;
  black: string;
  white: string;
}

export const lightColor = {
  ...baseColors,
  primary: '#1575d9',
  primaryDark: '#1c5c9e',
  primaryLight: '#519ae5',
  primaryLight2: '#519ae5',
  secondary: '#FBB159',
  gray: '#FCFDFF',
  grey0: '#ededf3',
  grey1: '#53587A',
  grey2: '#3A3F67',
  grey3: '#f8f8f9', // Body primary color
  grey5: '#707070',
  greyLight: '#d9d7d7',
  greyOutline: '#E2E2E2',
  disabled: '#9B9B9B',
  divider: '#9B9B9B',
  searchBg: '#9B9B9B',
  black: '#000',
  white: '#fff',
  platform: {
    android: baseColors,
    ios: baseColors,
    web: baseColors,
    default: baseColors,
  },
};

export const darkColors = {
  ...baseColors,
  primary: '#1575d9',
  primaryDark: '#1c5c9e',
  primaryLight: '#519ae5',
  primaryLight2: '#519ae5',
  secondary: '#FBB159',
  gray: '#707070',
  grey0: '#292929',
  grey1: '#53587A',
  grey2: '#ffffff',
  grey3: '#000', // Body primary color
  grey5: '#707070',
  greyLight: '#d9d7d7',
  greyOutline: '#E2E2E2',
  disabled: '#9B9B9B',
  divider: '#9B9B9B',
  searchBg: '#9B9B9B',
  black: '#fff',
  white: '#000',
  platform: {
    android: baseColors,
    ios: baseColors,
    web: baseColors,
    default: baseColors,
  },
};

export enum typo {
  XL = 34,
  L = 25,
  M = 18,
  S = 16,
  SM = 15,
  SSM = 12,
}
export const BorderRadious = {
  s: 4 * ASPECT_RATIO,
  m: 8 * ASPECT_RATIO,
  l: 30 * ASPECT_RATIO,
  xl: 32 * ASPECT_RATIO,
  xxl: 48 * ASPECT_RATIO,
};

export type ThemeProps = {insets: EdgeInsets};

export type participantsDataProps = {
  profilePicture: string;
  name: string;
  uid: string;
};

export const Spacing = {
  s: 4 * ASPECT_RATIO,
  m: 16 * ASPECT_RATIO,
  lg: 18 * ASPECT_RATIO,
  xl: 32 * ASPECT_RATIO,
  xxl: 48 * ASPECT_RATIO,
};

export const sizes = {
  padding: 15,
  margin: 15,
  radious: 10,
  ...typo,
  width,
  height,
  bold: 'bold',
  bold1: '900',
  bold2: '700',
  bold3: '500',
  bold4: 'normal',
  space1: 10,
  space2: 15,
  space3: 20,
};

export function hexToRGB(hex, mode: ThemeMode) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  return mode === 'dark'
    ? 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.2 + ')'
    : 'rgba(' + r + ', ' + g + ', ' + b + ', ' + 0.1 + ')';
}
