import { authStateType } from "./AuthState";


/**
 * 0 =>  Splash Screen
 * 1 => App
 */

export const AuthStateDefaults:authStateType = {
    currentAuthState:0,
};
export const getAuthState = ()=>{
    return {...AuthStateDefaults};
}