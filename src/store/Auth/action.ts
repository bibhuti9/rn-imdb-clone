import { StoreType } from "..";

export function AuthStateAction({authState}: StoreType) {
  function setAuthState(status: number) {
    authState.currentAuthState = status;
  }
  
  return {setAuthState};
}
