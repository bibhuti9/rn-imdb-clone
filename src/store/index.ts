import {Instance, types} from 'mobx-state-tree';

import {authState} from './Auth/AuthState';
import {deviceStore} from './Device';
import {getAuthState} from './Auth/default';

import {AuthStateAction} from './Auth/action';
import {getDeviceDefaultState} from './Device/default';
import {movieStore, movieSnapShot, MovieType} from './Movies';
import {moviesAction} from './Movies/action';
import {widhListStore, wishListStoreStoreType} from './Wishlist';
import {wishListAction} from './Wishlist/action';

export const Store = types
  .model('rootStore', {
    authState: authState,
    device: deviceStore,
    movies: movieStore,
    wishList: widhListStore,
  })
  .actions(AuthStateAction)
  .actions(moviesAction)
  .actions(wishListAction)
  .actions(store => ({
    movie(movieId: string): movieSnapShot | undefined {
      return store.movies.get(movieId);
    },
    checkHasWishList(targetId: string): boolean {
      return store.wishList.has(targetId);
    },
  }))
  .views(store => ({
    get loaders(): boolean {
      return store.device.status;
    },
    get allMovies(): movieSnapShot[] {
      return Array.from<movieSnapShot>(store.movies.values());
    },
    get latestMovies(): movieSnapShot[] {
      return Array.from<movieSnapShot>(store.movies.values()).filter(movie =>
        movie.type?.includes(MovieType.Latest),
      );
    },
    get popularMovies(): movieSnapShot[] {
      return Array.from<movieSnapShot>(store.movies.values()).filter(movie =>
        movie.type?.includes(MovieType.Featured),
      );
    },
    get allWishList(): wishListStoreStoreType[] {
      return Array.from<wishListStoreStoreType>(store.wishList.values());
    },
  }));

// @ts-ignore
export type StoreType = Instance<typeof Store>;
export const store = Store.create({
  authState: getAuthState(),
  device: getDeviceDefaultState(),
});
