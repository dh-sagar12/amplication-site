import { SortOrder } from "../../util/SortOrder";

export type PortfolioProjectOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  image?: SortOrder;
  projectDate?: SortOrder;
};
