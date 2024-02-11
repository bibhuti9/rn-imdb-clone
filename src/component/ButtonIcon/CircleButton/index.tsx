import {TouchableOpacity, TextStyle, ViewStyle, StyleSheet} from 'react-native';
import React from 'react';
import {btnPossition, btnSizeType, useStyle} from './styles';
import Typography from '@component/typography';
import {typo} from '@theme/colors';

interface PropsTypes {
  bgColor: string;
  type?: btnSizeType;
  icon?: React.ReactNode;
  containerStyle?: ViewStyle;
  onPrss?: () => void;
  text?: string;
  position?: btnPossition;
  textStyle?: TextStyle;
  disabled?: boolean;
  isDynamicBgColor?: boolean;
  style?: ViewStyle;
  other?;
}

export default function CircleButton({
  bgColor,
  text,
  type = 'medium',
  containerStyle,
  style,
  textStyle,
  disabled = false,
  position = 'row',
  icon,
  isDynamicBgColor = true,
  onPrss,
  ...props
}: PropsTypes) {
  const styles = useStyle({bgColor, type, position, isDynamicBgColor});
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPrss}
      disabled={disabled}
      {...props}>
      <TouchableOpacity
        disabled={disabled}
        style={[styles.btn, containerStyle]}
        onPress={onPrss}>
        {icon && icon}
      </TouchableOpacity>
      {text && (
        <Typography
          size={typo.SM}
          style={StyleSheet.flatten([styles.text, textStyle])}>
          {text}
        </Typography>
      )}
    </TouchableOpacity>
  );
}
