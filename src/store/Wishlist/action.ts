import {StoreType} from '..';
import {wishListStoreStoreType} from '.';

export function wishListAction({wishList}: StoreType) {
  function setWishList(wishLists: wishListStoreStoreType) {
    const existsTask = wishList.get(wishLists.targetId);

    if (existsTask) {
      return wishList.delete(wishLists.targetId);
    }
    wishList.set(wishLists.targetId, wishLists);
  }
  function addWishList(whereYouLeft: wishListStoreStoreType[]) {
    whereYouLeft.forEach((snapshot): void => setWishList(snapshot));
  }

  return {setWishList, addWishList};
}
