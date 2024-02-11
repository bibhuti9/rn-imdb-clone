import {movieStoreType} from '@store/Movies';

export const useSearch = (text: string, movies: movieStoreType[]) => {
  return movies.filter(val =>
    val.name.toLocaleLowerCase().includes(text.toLocaleLowerCase()),
  );
};
