import { PortfolioProject as TPortfolioProject } from "../api/portfolioProject/PortfolioProject";

export const PORTFOLIOPROJECT_TITLE_FIELD = "title";

export const PortfolioProjectTitle = (record: TPortfolioProject): string => {
  return record.title?.toString() || String(record.id);
};
