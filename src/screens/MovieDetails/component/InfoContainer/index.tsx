import {View} from 'react-native';
import React from 'react';

import {movieStoreType} from '@store/Movies';

import {useStyle} from './styles';
import MovieInformation from './components/MovieInformation';
import Cast from './components/Cast';
import MovieDescription from './components/MovieDescription';

export interface PropsTypes {
  movie: movieStoreType;
}

export default function InfoContainer({movie}: PropsTypes) {
  const styles = useStyle();

  return (
    <View style={styles.container}>
      <MovieInformation movie={movie} />
      <Cast movie={movie} />
      <MovieDescription movie={movie} />
    </View>
  );
}
