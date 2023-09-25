import {
  CREATE_CUSTOMER_REDUX,
  DELETE_CUSTOMER_REDUX,
  SET_CUSTOMERS_REDUX,
  UPDATE_CUSTOMER_REDUX,
} from "../types";

const defaultState = {
  loading: true,
  error: "",
  data: [],
};

const customers = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_CUSTOMERS_REDUX:
      return {
        ...state,
        ...payload,
        // data: payload?.data || [],
        // error: payload?.error || "",
        // loading: !!payload?.loading,
      };
    case CREATE_CUSTOMER_REDUX:
      return { ...state, data: payload };
    case UPDATE_CUSTOMER_REDUX:
      return { ...state, data: payload };
    case DELETE_CUSTOMER_REDUX:
      return { ...state, data: payload };

    default:
      return state;
  }
};
export default customers;
