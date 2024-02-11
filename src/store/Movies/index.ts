import {Instance, SnapshotIn, types} from 'mobx-state-tree';

export enum MovieType {
  Latest = 'Latest',
  Banner = 'Banner',
  Featured = 'Featured',
}

export const movies = types.model('MovieStore', {
  id: types.string,
  name: types.string,
  backImage: types.string,
  fontImage: types.string,
  ratting: types.number,
  year: types.string,
  length: types.string,
  director: types.string,
  cast: types.string,
  movieDesc: types.string,
  type: types.array(types.string),
  tag: types.string,
});

export const movieStore = types.map(movies);
export type movieSnapShot = SnapshotIn<typeof movies>;
export type movieStoreType = Instance<typeof movies>;
