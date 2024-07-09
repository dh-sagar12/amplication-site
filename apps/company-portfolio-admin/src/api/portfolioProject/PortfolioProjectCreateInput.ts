import { InputJsonValue } from "../../types";

export type PortfolioProjectCreateInput = {
  title?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  projectDate?: Date | null;
};
