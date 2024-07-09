import { SortOrder } from "../../util/SortOrder";

export type ContentManagerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  content?: SortOrder;
  section?: SortOrder;
};
