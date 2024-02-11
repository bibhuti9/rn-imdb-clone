import {Image, ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {movieStoreType} from '@store/Movies';
import {useStyle} from './styles';
import Typography from '@component/typography';
import {_Shrink} from '@utils/string';
import {push} from '@utils/navigation';
import {Route} from '@navigators/index';

interface PropsTypes {
  containerStyle?: ViewStyle;
  movie: movieStoreType;
  isMovieName?: boolean;
}

export default function MovieCard({
  movie,
  isMovieName,
  containerStyle,
}: PropsTypes) {
  const styles = useStyle();
  const onPress = () => {
    push({screenName: Route.MovieDetails, params: movie.id});
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Image source={{uri: movie.fontImage}} style={styles.image} />
      {isMovieName && <Typography>{_Shrink(movie.name, 10)}</Typography>}
    </TouchableOpacity>
  );
}
