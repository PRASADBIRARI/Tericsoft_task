import {
  FETCH_FAILURE,
  FETCH_REQUEST,
  FETCH_SUCCESS,
} from "./ActionType";

const init = {
  isLoading: true,
  isError: false,
  data: [],
};

export const dashboardReducer = (state = init, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
      };

    default:
      return state;
  }
};
