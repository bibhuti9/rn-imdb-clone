import {TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Typography from '@component/typography';
import {useStyle} from '../styles';
import {ButtonPropsTypes} from '../types';
import {getShadow} from '@theme/commonStyle';

export default function SolidButton({
  text,
  textStyle,
  containerStyle,
  onPress,
  isShadow,
}: ButtonPropsTypes) {
  const styles = useStyle();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.solidContainer, containerStyle, isShadow && getShadow(4)]}>
      <Typography style={StyleSheet.flatten([styles.textStyle, textStyle])}>
        {text}
      </Typography>
    </TouchableOpacity>
  );
}
