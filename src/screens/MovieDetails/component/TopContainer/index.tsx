import {View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {movieStoreType} from '@store/Movies';
import {useStyle} from '../../styles';
import ButtonIcon from '@component/ButtonIcon';
import {pop} from '@utils/navigation';
import Typography from '@component/typography';
import Review from '@component/Review';
import {store} from '@store/index';
import {observer} from 'mobx-react';
import Heart from '@component/Heart';
import {addToWishList} from '@store/Wishlist/dispatch';

function TopContainer({movie}: {movie: movieStoreType}) {
  const hasWishList: boolean = store.wishList.has(movie.id);
  const styles = useStyle();
  const onFavorite = () => {
    addToWishList(movie.id);
  };
  return (
    <View style={styles.topContainer}>
      <FastImage source={{uri: movie.backImage}} style={styles.imageBackground}>
        <View style={styles.backContainer}>
          <ButtonIcon
            iconName="chevron-left"
            iconColor={'#fff'}
            iconProps={{size: 30}}
            onAction={pop}
          />
          <Heart onPress={onFavorite} hasFavorite={hasWishList} />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.leftBottomContainer}></View>
          <View style={styles.rightBottomContainer}>
            <Typography style={styles.imageText}>{movie.name}</Typography>
          </View>
        </View>
      </FastImage>
      <View style={styles.bottomContainer}>
        <View style={styles.leftBottomContainer}>
          <FastImage source={{uri: movie.fontImage}} style={styles.leftImage} />
        </View>
        <View style={styles.rightBottomContainer}>
          <Review length={movie.ratting} />
        </View>
      </View>
    </View>
  );
}
export default observer(TopContainer);
