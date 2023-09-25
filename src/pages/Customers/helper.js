import { axiosGET } from "../../lib/axios";
import { createCustomerRedux, setCustomersRedux } from "../../store/actions";

export const getCustomers = async (dispatch) => {
  try {
    // const localData = localStorage.getItem("customers");
    // if (localData) {
    //   dispatch(setCustomersRedux({ data: JSON.parse(localData) }));
    //   return;
    // }
    const res = await axiosGET("https://reqres.in/api/users?page=1");
    // localStorage.setItem("customers", JSON.stringify(res?.data?.data));
    dispatch(setCustomersRedux({ data: res?.data?.data }));
  } catch (error) {
    dispatch(setCustomersRedux({ error: error?.message, loading: false }));
  }
};

export const createCustomer = async (dispatch) => {
  try {
    console.log("createCustomer");
    const data = JSON.parse(localStorage.getItem("customers"));
    const largestId = data.reduce((maxId, currentItem) => {
      return Math.max(maxId, currentItem.id);
    }, 1);
    const newCustomer = {
      id: largestId + 1,
      email: "user@example.com",
      name: "Username" + " " + largestId + 1,
    };
    dispatch(createCustomerRedux(newCustomer));

    localStorage.setItem("customers", JSON.stringify([...data, newCustomer]));
  } catch (error) {
    console.log("🚀error:", error);
  }
};
export const updateCustomer = async (dispatch) => {
  try {
    console.log("updateCustomer");
  } catch (error) {
    console.log("🚀error:", error);
  }
};
export const deleteCustomer = async (dispatch) => {
  try {
    console.log("deleteCustomer");
  } catch (error) {
    console.log("🚀error:", error);
  }
};
