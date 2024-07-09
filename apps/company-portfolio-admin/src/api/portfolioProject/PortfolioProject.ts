import { JsonValue } from "type-fest";

export type PortfolioProject = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  image: JsonValue;
  projectDate: Date | null;
};
