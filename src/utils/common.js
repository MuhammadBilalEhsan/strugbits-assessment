import { toast } from "react-toastify";

export const globalSortFunction = (rows, key, isDescending) =>
  rows?.sort((x, y) => {
    const a = x?.[key];
    const b = y?.[key];
    const type = typeof a;

    if (type === "number") {
      return isDescending ? b - a : a - b;
    } else if (type === "string") {
      return isDescending ? b.localeCompare(a) : a.localeCompare(b);
    } else {
      toast.error("please handle other types as well");
    }
  });
