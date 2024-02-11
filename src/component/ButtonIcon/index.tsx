import {TouchableOpacity, TextStyle, ViewStyle} from 'react-native';
import React from 'react';
import DefaultIcon from '@component/DefaultIcon';
import {useTheme} from '@rneui/themed';
import {useStyle} from './styles';

import {ActivityIndicator} from 'react-native';
import Text from '@component/Text';
interface propsTypes {
  iconName?: string;
  title?: string;
  textStyle?: TextStyle;
  containerStyle?: ViewStyle;
  iconStyle?: TextStyle;
  iconProps?: any;
  onAction?: () => void;
  iconColor?: string;
  disabled?: boolean;
  customIcon?: React.ReactNode;
  loader?: boolean;
  children?;
}

export default function ButtonIcon({
  iconName,
  title,
  textStyle,
  containerStyle,
  iconStyle,
  iconProps,
  onAction,
  iconColor,
  disabled = false,
  customIcon,
  loader = false,
  children,
}: propsTypes) {
  const {theme} = useTheme();
  const styles = useStyle();
  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.container, containerStyle]}
      onPress={onAction}>
      {loader ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          {customIcon ? (
            customIcon
          ) : (
            <DefaultIcon
              iconName={iconName}
              style={iconStyle}
              color={iconColor ?? theme.colors.black}
              {...iconProps}
            />
          )}
          {title && (
            <Text style={[styles.textStyle, {...textStyle}]}>{title}</Text>
          )}
          {children}
        </>
      )}
    </TouchableOpacity>
  );
}
