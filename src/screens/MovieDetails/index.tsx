import {ScrollView} from 'react-native';
import React from 'react';
import {store} from '@store/index';
import {movieStoreType} from '@store/Movies';
import {observer} from 'mobx-react';
import {useRoute} from '@react-navigation/native';
import TopContainer from './component/TopContainer';
import InfoContainer from './component/InfoContainer';

function MovieDetails() {
  const params = useRoute();
  const movie: movieStoreType = store.movie(params?.params);

  return (
    <ScrollView>
      <TopContainer movie={movie} />
      <InfoContainer movie={movie} />
    </ScrollView>
  );
}
export default observer(MovieDetails);
