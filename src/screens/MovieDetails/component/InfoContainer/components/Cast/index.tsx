import {View} from 'react-native';
import React from 'react';
import {PropsTypes} from '../..';
import {useStyle} from '../../styles';
import Typography from '@component/typography';

const Cast = ({movie}: PropsTypes) => {
  const styles = useStyle();

  return (
    <View style={styles.cast}>
      <Typography style={styles.label}>Cast</Typography>
      <Typography>{movie.cast}</Typography>
    </View>
  );
};

export default Cast;
