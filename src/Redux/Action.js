import axios from "axios";
import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "./ActionType";

// getting All the Tasks
export const FetchRequest = () => {
  return {
    type: FETCH_REQUEST,
  };
};
export const FetchSucess = (payload) => {
  return {
    type: FETCH_SUCCESS,
    payload,
  };
};
export const FetchFailure = () => {
  return {
    type: FETCH_FAILURE,
  };
};
export const getAllData = () => (dispatch) => {
  dispatch(FetchRequest());
  axios({
    method: "get",
    url: `https://2ba0c941-25ca-4ba4-8d30-6c91660028cd.mock.pstmn.io/posts`,
  })
    .then((res) => {
      dispatch(FetchSucess(res.data));
    })
    // .catch((err) => {
    //   alert(`${err}`);
    //   dispatch(FetchFailure());
    // });
};
