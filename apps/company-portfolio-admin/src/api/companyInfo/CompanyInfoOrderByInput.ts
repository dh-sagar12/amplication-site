import { SortOrder } from "../../util/SortOrder";

export type CompanyInfoOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  address?: SortOrder;
  description?: SortOrder;
};
