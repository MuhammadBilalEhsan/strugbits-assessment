const CUSTOMERS = "CUSTOMERS";

export const setCustomersLocal = (data) =>
  localStorage.setItem(CUSTOMERS, JSON.stringify(data));

export const getCustomersLocal = () => localStorage.getItem(CUSTOMERS);
