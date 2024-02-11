import React from 'react';

import {typo} from '@theme/colors';
import {Font, PropsTypes} from './types';

import {makeStyles} from '@rneui/themed';
import Text from '@component/Text';

export default function Typography({
  children,
  font = Font.PoppinsRegular,
  style,
  size = typo.M,
  color,
  fontWeight = 'normal',
  ...other
}: PropsTypes) {
  const styles = useStyle({font, size, style, color, fontWeight});
  return (
    <Text style={styles.text} {...other}>
      {children}
    </Text>
  );
}
const useStyle = makeStyles(
  (
    theme,
    props: {
      font: string;
      size: number;
      fontWeight: string;
      color: string | undefined;
      style;
    },
  ) => ({
    text: {
      fontFamily: props.font,
      fontSize: props.size,
      flexDirection: 'row',
      fontWeight: props?.fontWeight ?? '400',
      alignItems: 'center',
      color: props?.color ?? theme.colors.black,
      ...props.style,
    },
  }),
);
