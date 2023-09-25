import {
  CREATE_CUSTOMER_REDUX,
  DELETE_CUSTOMER_REDUX,
  SET_CUSTOMERS_REDUX,
  UPDATE_CUSTOMER_REDUX,
} from "../types";

export const setCustomersRedux = (data) => ({
  type: SET_CUSTOMERS_REDUX,
  payload: data,
});
export const createCustomerRedux = (data) => ({
  type: CREATE_CUSTOMER_REDUX,
  payload: data,
});
export const updateCustomerRedux = (data) => ({
  type: UPDATE_CUSTOMER_REDUX,
  payload: data,
});
export const deleteCustomerRedux = (data) => ({
  type: DELETE_CUSTOMER_REDUX,
  payload: data,
});
