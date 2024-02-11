import {View} from 'react-native';
import React from 'react';
import {useStyle} from '../../styles';
import {PropsTypes} from '../..';
import Typography from '@component/typography';

const MovieInformation = ({movie}: PropsTypes) => {
  const info = [movie.year, movie.length, movie.director];
  const styles = useStyle();

  return (
    <View style={styles.reviewContainer}>
      {info.map((el, _) => (
        <View style={styles.reviewContainer}>
          <Typography>{el}</Typography>
          {_ !== info.length && <View style={styles.seperator} />}
        </View>
      ))}
    </View>
  );
};
export default MovieInformation;
