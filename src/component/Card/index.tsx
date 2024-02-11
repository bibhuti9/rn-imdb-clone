import {ViewStyle, TouchableOpacity} from 'react-native';
import React from 'react';
import {movieStoreType} from '@store/Movies';
import {useStyle} from './styles';
import Typography from '@component/typography';
import {_Shrink} from '@utils/string';
import {push} from '@utils/navigation';
import {Route} from '@navigators/index';
import Heart from '@component/Heart';
import {addToWishList} from '@store/Wishlist/dispatch';
import {observer} from 'mobx-react';
import {store} from '@store/index';
import FastImage from 'react-native-fast-image';

interface PropsTypes {
  containerStyle?: ViewStyle;
  movie: movieStoreType;
  isMovieName?: boolean;
}

function MovieCard({movie, isMovieName, containerStyle}: PropsTypes) {
  const hasWishList: boolean = store.wishList.has(movie.id);
  const styles = useStyle();
  const onPress = () => {
    push({screenName: Route.MovieDetails, params: movie.id});
  };
  const onFavorite = () => {
    addToWishList(movie.id);
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <Heart onPress={onFavorite} hasFavorite={hasWishList} />
      <FastImage source={{uri: movie.fontImage}} style={styles.image} />
      {isMovieName && <Typography>{_Shrink(movie.name, 10)}</Typography>}
    </TouchableOpacity>
  );
}
export default observer(MovieCard);
