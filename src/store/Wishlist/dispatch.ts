import {store} from '..';
import {wishListStoreStoreType} from '.';

export const addToWishList = (targetId: string) => {
  const query: wishListStoreStoreType = {
    _id: targetId,
    targetId: targetId,
  };
  store.setWishList(query);
};
