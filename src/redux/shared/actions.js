import { SET_USER } from "./reducers";
import * as STORAGE from "../../services/storage";
// import api from '../../services/api'

export const checkUser = () => {
  return (dispatch) => {
    const user = STORAGE.getItemFromStorage("user");

    if (user) {
      dispatch(SET_USER(user));
    } else {
      return false;
    }
  };
};

export const setUser = (name) => {
  STORAGE.setItemInStorage("user", name);
  return async (dispatch) => {
    dispatch(SET_USER(name));
  };
};

export const signOut = () => {
  STORAGE.removeItemFromStorage("user");
  return  (dispatch) => {
    dispatch(SET_USER(null));
  };
}
