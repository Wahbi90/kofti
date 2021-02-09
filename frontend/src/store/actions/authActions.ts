import { ThunkAction } from 'redux-thunk';
import {
  SignUpData,
  AuthAction,
  SET_USER,
  User,
  SET_LOADING,
  SIGN_OUT,
  SignInData,
  SET_ERROR,
  NEED_VERIFICATION,
  SET_SUCCESS,
  setLoadingAction,
} from '../types';
import { RootState } from '..';
import firebase from '../../firebase/config';

// create user

export const signup = (
  data: SignUpData,
  onError: () => void,
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const res = await firebase
        .auth()
        .createUserWithEmailAndPassword(data.email, data.password);
      if (res.user) {
        const userData: User = {
          firstName: data.firstName,
          email: data.email,
          id: res.user.uid,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          types: data.types,
        };
        await firebase
          .firestore()
          .collection('/users')
          .doc(res.user.uid)
          .set(userData);
        await res.user.sendEmailVerification();
        dispatch({
          type: NEED_VERIFICATION,
        });
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
    } catch (err) {
      onError();
      dispatch({
        type: SET_ERROR,
        payload: err.message,
      });
    }
  };
};

export const getUser = (): ThunkAction<void, RootState, null, AuthAction> => (
  dispatch,
) => {
  dispatch(setLoading(true));
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      return dispatch(getUserById(user.uid));
    }
    return dispatch(setLoading(false));
  });
};

// get user by id

export const getUserById = (
  id: string,
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      const user = await firebase
        .firestore()
        .collection('/users')
        .doc(id)
        .get();
      if (user) {
        const userData = user.data() as User;
        dispatch({
          type: SET_USER,
          payload: userData,
        });
      }
      dispatch(setLoading(false));
    } catch (err) {
      console.log(err);
    }
  };
};

export const setLoading = (value: boolean): setLoadingAction => ({
  type: SET_LOADING,
  payload: value,
});

export const signin = (
  data: SignInData,
  onError: () => void,
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(data.email, data.password);
    } catch (err) {
      onError();
      dispatch(setError(err.message));
    }
  };
};

export const signout = (): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      await firebase.auth().signOut();
      dispatch({
        type: SIGN_OUT,
      });
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setLoading(false));
    }
  };
};

export const setError = (
  msg: string,
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_ERROR,
      payload: msg,
    });
  };
};

export const setNeedVerification = (): ThunkAction<
  void,
  RootState,
  null,
  AuthAction
> => {
  return (dispatch) => {
    dispatch({
      type: NEED_VERIFICATION,
    });
  };
};

export const setSuccess = (
  msg: string,
): ThunkAction<void, RootState, null, AuthAction> => {
  return (dispatch) => {
    dispatch({
      type: SET_SUCCESS,
      payload: msg,
    });
  };
};

export const sendPasswordResetEmail = (
  email: string,
  successMsg: string,
): ThunkAction<void, RootState, null, AuthAction> => {
  return async (dispatch) => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      dispatch(setSuccess(successMsg));
    } catch (err) {
      dispatch(setError(err.message));
    }
  };
};
