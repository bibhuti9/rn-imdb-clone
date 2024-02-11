import {View} from 'react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {movieStoreType} from '@store/Movies';
import {useStyle} from '../../styles';
import ButtonIcon from '@component/ButtonIcon';
import {pop} from '@utils/navigation';
import Typography from '@component/typography';
import Review from '@component/Review';

export default function TopContainer({movie}: {movie: movieStoreType}) {
  const styles = useStyle();
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
