import {applySnapshot} from 'mobx-state-tree';
import {StoreType} from '..';
import {movieStoreType} from '.';

export function moviesAction({movies}: StoreType) {
  function setMovies(movie: movieStoreType) {
    const existsMovie = movies.get(movie.id);
    if (existsMovie) {
      return applySnapshot(existsMovie, movie); // applySnapshot is used for assign changes and render it
    }
    movies.set(movie.id, movie);
  }
  function addMovies(task: movieStoreType[]) {
    task.forEach((snapshot): void => setMovies(snapshot));
  }
  return {setMovies, addMovies};
}
