import {movies} from '@store/Movies';
import {Instance, SnapshotIn, types} from 'mobx-state-tree';

export const wishList = types.model('wishListStore', {
  _id: types.string,
  targetId: types.reference(movies),
});

export const widhListStore = types.map(wishList);

export type wishListStoreSnapShot = SnapshotIn<typeof wishList>;
export type wishListStoreStoreType = Instance<typeof wishList>;
