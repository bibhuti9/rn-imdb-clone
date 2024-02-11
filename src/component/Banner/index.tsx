import React from 'react';
import {View, Text} from 'react-native';
import FastImage from 'react-native-fast-image';

import {MovieTypes} from '@reference/index';
import {useStyle} from './styles';
import {_Shrink} from '@utils/string';
import {useTheme} from '@rneui/themed';
import ButtonIcon from '@component/ButtonIcon';
import Typography from '@component/typography';
import {push} from '@utils/navigation';
import {Route} from '@navigators/index';

interface PropsTypes {
  item: MovieTypes;
}

export default function Banner({item}: PropsTypes) {
  const styles = useStyle();
  const {theme} = useTheme();
  const onPress = () => {
    push({screenName: Route.MovieDetails, params: item.id});
  };
  return (
    <View style={styles.container}>
      <FastImage
        source={{uri: item.backImage}}
        style={styles.imageBackground}
        resizeMode="cover">
        <Text style={styles.text}>{_Shrink(item.name, 30)}</Text>
      </FastImage>
      <View style={styles.bottomContainer}>
        <ButtonIcon
          onAction={onPress}
          iconName="controller-play"
          iconColor={theme.colors.white}
          containerStyle={styles.playBtn}>
          <Typography color={theme.colors.white}>Play</Typography>
        </ButtonIcon>
        <ButtonIcon containerStyle={styles.outlineButton} onAction={onPress}>
          <Typography>Details</Typography>
        </ButtonIcon>
      </View>
    </View>
  );
}
