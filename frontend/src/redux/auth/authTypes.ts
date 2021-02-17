export const SET_USER = 'SET_USER';
export const SIGN_OUT = 'SIGN_OUT';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const NEED_VERIFICATION = 'NEED_VERIFICATION';
export const SET_SUCCESS = 'SET_SUCCESS';

export interface User {
    firstName : string;
    email : string;
    id : string;
    createdAt : any;
    types : boolean;
    rewards: number;
}

export interface AuthState {
    user : User | null;
    authenticated : boolean;
    loading : boolean;
    error : string;
    needVerification : boolean;
    success : string
}

export interface SignUpData {
    firstName : string;
    email : string;
    password : string;
    gender : string;
    types : boolean;
}

export interface SignInData {
    email : string;
    password : string;    
}

// Actions

interface setUserAction {
    type : typeof SET_USER;
    payload : User
}

export interface setLoadingAction {
    type : typeof SET_LOADING;
    payload : boolean
}

interface signOutAction {
    type : typeof SIGN_OUT;
}

interface setErrorAction {
    type : typeof SET_ERROR;
    payload : string;
}

interface needVerificationAction {
    type : typeof NEED_VERIFICATION;
}

interface setSuccessAction{
    type : typeof SET_SUCCESS;
    payload : string;
}

export type AuthAction = setUserAction | setLoadingAction | signOutAction | setErrorAction | needVerificationAction | setSuccessAction 