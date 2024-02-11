import {TextStyle} from 'react-native';
import {typo} from '@theme/colors';

export interface PropsTypes {
  font?: Font;
  children?: string | null | React.ReactNode;
  style?: TextStyle;
  color?: string;
  size?: typo.L | typo.M | typo.S | typo.XL | typo.SM | typo.SSM;
  other?;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
}

export enum Font {
  Kaushan = 'KaushanScript-Regular',
  PoppinsRegular = 'Poppins-Regular',
}
