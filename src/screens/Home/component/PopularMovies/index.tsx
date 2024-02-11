import React from 'react';
import Sliders from '@component/Slider';
import {usePopularMovies} from '@screens/Home/controller';
import {movieStoreType} from '@store/Movies';

export default function PoluparMovie() {
  const latestMovies: movieStoreType[] = usePopularMovies();
  return <Sliders heading="Popular Movies" list={latestMovies} />;
}
