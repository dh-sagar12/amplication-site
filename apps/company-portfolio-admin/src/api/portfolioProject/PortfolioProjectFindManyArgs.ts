import { PortfolioProjectWhereInput } from "./PortfolioProjectWhereInput";
import { PortfolioProjectOrderByInput } from "./PortfolioProjectOrderByInput";

export type PortfolioProjectFindManyArgs = {
  where?: PortfolioProjectWhereInput;
  orderBy?: Array<PortfolioProjectOrderByInput>;
  skip?: number;
  take?: number;
};
