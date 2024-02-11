import React from 'react';
import {ScrollView, View} from 'react-native';
import HomeTopBanner from './component/TopBanner';
import LatestMovie from './component/LatestMovie';
import PoluparMovie from './component/PopularMovies';

export default function Home() {
  return (
    <ScrollView>
      <View>
        <HomeTopBanner />
        <LatestMovie />
        <PoluparMovie />
      </View>
    </ScrollView>
  );
}
