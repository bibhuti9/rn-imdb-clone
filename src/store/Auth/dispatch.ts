import {store} from '..';

export const changeAuthState = (state: number) => {
  return store.setAuthState(state);
};
