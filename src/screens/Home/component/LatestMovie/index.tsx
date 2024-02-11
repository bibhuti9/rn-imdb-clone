import React from 'react';
import Sliders from '@component/Slider';
import {useLatestMovies} from '@screens/Home/controller';
import {movieStoreType} from '@store/Movies';

export default function LatestMovie() {
  const latestMovies: movieStoreType[] = useLatestMovies();
  return (
    <Sliders
      labelText="Browse Trailers and Videos"
      onLabelpress={() => {}}
      heading="Latest Movies"
      list={latestMovies}
    />
  );
}
