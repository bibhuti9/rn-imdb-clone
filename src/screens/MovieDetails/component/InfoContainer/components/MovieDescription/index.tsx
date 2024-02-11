import {View} from 'react-native';
import React from 'react';
import {PropsTypes} from '../..';
import {useStyle} from '../../styles';
import Typography from '@component/typography';

export default function MovieDescription({movie}: PropsTypes) {
  const styles = useStyle();

  return (
    <View style={styles.cast}>
      <Typography style={styles.label}>Movie Description</Typography>
      <Typography>{movie.movieDesc}</Typography>
    </View>
  );
}
