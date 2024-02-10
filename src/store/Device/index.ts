import {types, SnapshotIn, Instance} from 'mobx-state-tree';

export const device = types.model('deviceStore', {
  status: types.boolean,
  globalAlert: types.boolean,
});
export const deviceStore = device;
export type deviceShapshot = SnapshotIn<typeof deviceStore>;
export type deviceStoreType = Instance<typeof deviceStore>;
