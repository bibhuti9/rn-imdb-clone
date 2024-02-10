import {deviceShapshot} from '.';

export const defaultDeviceState: deviceShapshot = {
  status: false,
  globalAlert: false,
};

export const getDeviceDefaultState = () => {
  return {...defaultDeviceState};
};
