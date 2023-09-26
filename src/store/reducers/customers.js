import { toast } from "react-toastify";
import { setCustomersLocal } from "../../utils/localStorage";
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
      };

    case CREATE_CUSTOMER_REDUX:
      let afterCreated = { ...state, data: [...state.data, payload] };
      setCustomersLocal(afterCreated?.data);
      toast.success("Customer successfully created.");
      return afterCreated;

    case UPDATE_CUSTOMER_REDUX:
      let afterUpdated = {
        ...state,
        data: state?.data?.map((item) =>
          item?.id === payload?.id ? payload : item
        ),
      };
      setCustomersLocal(afterUpdated?.data);
      toast.success("Customer successfully updated.");
      return afterUpdated;

    case DELETE_CUSTOMER_REDUX:
      let afterDeleted = {
        ...state,
        data: state?.data?.filter((item) => item?.id !== payload?.id),
      };
      setCustomersLocal(afterDeleted?.data);
      toast.success("Customer successfully deleted.");
      return afterDeleted;

    default:
      return state;
  }
};
export default customers;
