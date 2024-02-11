import React from 'react';
import {
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';

import {MovieTypes} from '@reference/index';
import {useStyle} from './styles';
import Typography from '@component/typography';
import {_Shrink} from '@utils/string';
import {useTheme} from '@rneui/themed';
import {Font} from '@component/typography/types';

interface PropsTypes {
  item: MovieTypes;
}

export default function Banner({item}: PropsTypes) {
  const styles = useStyle();
  const {theme} = useTheme();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: item.backImage}}
        style={styles.imageBackground}
        resizeMode="cover">
        <TouchableOpacity style={styles.playBtn}>
          <Icon name="controller-play" size={30} color={theme.colors.black} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.bottomContainer}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <View style={styles.leftBottomContainer}>
            <Image source={{uri: item.fontImage}} style={styles.leftImage} />
          </View>
          <View style={styles.rightBottomContainer}>
            <Text style={styles.text}>{_Shrink(item.name, 30)}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
