import React from 'react';
import {PropsTypes} from './types';
import {Icon} from '@rneui/themed';
export default function DefaultIcon({
  iconName,
  type = 'entypo',
  style,
  color,
  size,
  ...other
}: PropsTypes) {
  return (
    <Icon
      {...other}
      style={style}
      name={iconName}
      color={color}
      size={size}
      type={type}
    />
  );
}
