import {store} from '..';

export const setLoader = (status: boolean) => {
  store.setLoader(status);
};

export const getLoader = (): boolean => {
  return store.loaders;
};

export const setGlobalAlert = (status: boolean) => {
  store.setGlobalAlert(status);
};
