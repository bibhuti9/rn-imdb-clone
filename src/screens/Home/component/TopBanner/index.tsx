import {ScrollView} from 'react-native';
import React from 'react';
import Banner from '@component/Banner';
import {sizes} from '@theme/colors';
import {useMovies} from '@screens/Home/controller';
import {movieStoreType} from '@store/Movies';
import {observer} from 'mobx-react';

function HomeTopBanner() {
  const allMovies: movieStoreType[] = useMovies();
  return (
    <ScrollView
      horizontal
      pagingEnabled
      scrollEventThrottle={sizes.width}
      showsHorizontalScrollIndicator={false}>
      {allMovies.map((item, _) => (
        <Banner item={item} key={String(_)} />
      ))}
    </ScrollView>
  );
}
export default observer(HomeTopBanner);
