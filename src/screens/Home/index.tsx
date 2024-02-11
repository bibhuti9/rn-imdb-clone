import React from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import HomeTopBanner from './component/TopBanner';
import LatestMovie from './component/LatestMovie';
import PoluparMovie from './component/PopularMovies';
import {observer} from 'mobx-react';
import {getLoader} from '@store/Device/dispatch';

function Home() {
  const loader = getLoader();
  return (
    <ScrollView>
      {loader ? (
        <ActivityIndicator />
      ) : (
        <View>
          <HomeTopBanner />
          <LatestMovie />
          <PoluparMovie />
        </View>
      )}
    </ScrollView>
  );
}
export default observer(Home);
