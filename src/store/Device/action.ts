import {StoreType} from '..';

export function loaderAction({device}: StoreType) {
  function setLoader(status: boolean) {
    device.status = status;
  }

  function setGlobalAlert(status: boolean) {
    device.globalAlert = status;
  }
  return {setLoader, setGlobalAlert};
}
