import {store} from '@store/index';

export const useMovies = () => {
  return store.allMovies;
};
export const useLatestMovies = () => {
  return store.latestMovies;
};

export const usePopularMovies = () => {
  return store.popularMovies;
};
