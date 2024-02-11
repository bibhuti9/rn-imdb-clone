import {ScrollView, View} from 'react-native';
import React from 'react';
import {PropsTypes} from './types';
import Typography from '@component/typography';
import ButtonIcon from '@component/ButtonIcon';
import {useStyle} from './styles';
import MovieCard from '@component/Card';

const Card = ({movie}) => {
  const styles = useStyle();

  return (
    <View style={styles.card}>
      <MovieCard key={movie?.id} movie={movie} />
    </View>
  );
};

export default function Sliders({
  labelText,
  onLabelpress,
  heading,
  list,
}: PropsTypes) {
  const styles = useStyle();
  return (
    <View style={styles.container}>
      {labelText && (
        <View style={styles.lableContainer}>
          <Typography>{labelText}</Typography>
          <ButtonIcon
            onAction={onLabelpress}
            iconName="chevron-small-right"
            iconProps={{size: 30}}
          />
        </View>
      )}
      <View style={styles.movieContainer}>
        <Typography style={styles.heading}>{heading}</Typography>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {list.map((movie, _) => (
            <Card movie={movie} key={String(_)} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}
