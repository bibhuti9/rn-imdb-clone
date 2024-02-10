import {Instance, types} from 'mobx-state-tree';

export const authState = types.model('authStore', {
  currentAuthState: types.number,
});

export interface authStateType extends Instance<typeof authState>{}
 