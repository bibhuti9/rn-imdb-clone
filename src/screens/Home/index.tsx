import {SafeAreaView, View} from 'react-native';
import React from 'react';
import HomeTopBanner from './component/TopBanner';

export default function Home() {
  return (
    <SafeAreaView>
      <View>
        <HomeTopBanner />
      </View>
    </SafeAreaView>
  );
}
