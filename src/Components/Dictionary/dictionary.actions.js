import api from "../../services/api";
import { SET_WORD_RESULT } from "../../redux/shared/reducers";

export const searchWord = (word) => {
  return async (dispatch) => {
    try {
      const wordRes = await api.get(word);

      if (wordRes) {
        dispatch(SET_WORD_RESULT(wordRes));
        return true
      } else {
        return false;
      }

     
    } catch (error) {
      //   dispatch({type: LIST_LOAD_FAILURE, error});
      console.log("error", error);
      return false;
    }
  };
};
