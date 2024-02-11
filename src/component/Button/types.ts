import {TextStyle, ViewStyle} from 'react-native';

export interface ButtonPropsTypes {
  text?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  isShadow?: boolean;
  onPress?: () => void;
}
