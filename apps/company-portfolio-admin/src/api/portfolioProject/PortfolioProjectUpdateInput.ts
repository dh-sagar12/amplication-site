import { InputJsonValue } from "../../types";

export type PortfolioProjectUpdateInput = {
  title?: string | null;
  description?: string | null;
  image?: InputJsonValue;
  projectDate?: Date | null;
};
