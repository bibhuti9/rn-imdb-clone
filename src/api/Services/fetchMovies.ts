import {Transport} from '@api/Transport';
import {ApiPath} from '@api/paths';

import {store} from '@store/index';

export const fetchMovies = () => {
  const query = {
    path: ApiPath.fetchMovies,
  };

  return new Promise((resolve, reject) => {
    store.setLoader(true);
    Transport.post(query)
      .then(result => {
        store.setLoader(false);
        store.addMovies(result.data.Data);
        return resolve(result);
      })
      .catch(err => {
        store.setLoader(false);
        return reject(err);
      });
  });
};
