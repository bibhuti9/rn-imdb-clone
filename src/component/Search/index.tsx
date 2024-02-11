import {View, TouchableOpacity, TextInput} from 'react-native';
import React from 'react';
import {useStyle} from './styles';

import {useTheme} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';

interface PropsTypes {
  onSearch: (text: string) => void;
}

export default function Search({onSearch}: PropsTypes) {
  const styles = useStyle();
  const {theme} = useTheme();

  const ICON_SIZE = 20;
  const ICON_COLOR = theme.colors.black;

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.left}>
        <Icon name="search" size={ICON_SIZE} color={ICON_COLOR} />
        <TextInput
          onChangeText={onSearch}
          style={styles.textInput}
          placeholder="Search any movie name"
        />
      </View>
      <View style={styles.right}>
        <View style={styles.bar}></View>
        <Icon name="microphone" size={ICON_SIZE} color={ICON_COLOR} />
      </View>
    </TouchableOpacity>
  );
}
