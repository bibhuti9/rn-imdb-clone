import {View} from 'react-native';
import React from 'react';

import Icon from 'react-native-vector-icons/AntDesign';
import {makeStyles, useTheme} from '@rneui/themed';

interface PropsTypes {
  length: number;
}

export default function Review({length}: PropsTypes) {
  const dynamicArray = new Array(5).fill(0);
  const styles = useStyle();
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      {dynamicArray.map((_, index) => (
        <View key={String(index)} style={{marginRight: 5}}>
          {index < length ? (
            <Icon name="star" size={30} color={theme.colors.secondary} />
          ) : (
            <Icon name="staro" size={30} color={theme.colors.secondary} />
          )}
        </View>
      ))}
    </View>
  );
}
const useStyle = makeStyles(() => ({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
}));
