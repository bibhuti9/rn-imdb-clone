import {ScrollView} from 'react-native';
import React from 'react';
import {MovieTypes, movies} from '@reference/index';
import Banner from '@component/Banner';
import {sizes} from '@theme/colors';

export default function HomeTopBanner() {
  const movie = movies as Array<MovieTypes>;
  return (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={sizes.width}
      showsHorizontalScrollIndicator={false}>
      {movie.map((item, _) => (
        <Banner item={item} key={String(_)} />
      ))}
    </ScrollView>
  );
}
