import {Instance, types} from 'mobx-state-tree';

import {authState} from './Auth/AuthState';
import {deviceStore} from './Device';
import {getAuthState} from './Auth/default';

import {AuthStateAction} from './Auth/action';
import {getDeviceDefaultState} from './Device/default';


export const Store = types
  .model('rootStore', {
    authState: authState,
    device: deviceStore,
  })
  .actions(AuthStateAction)
  .views(store => ({
    get loaders(): boolean {
      return store.device.status;
    },
  }));

// @ts-ignore
export type StoreType = Instance<typeof Store>;
export const store = Store.create({
  authState: getAuthState(),
  device: getDeviceDefaultState(),
});
