import {fetchMovies} from './Services/fetchMovies';

export const syncAppData = async (): Promise<void> => {
  fetchMovies();
};
