import { CompanyInfo as TCompanyInfo } from "../api/companyInfo/CompanyInfo";

export const COMPANYINFO_TITLE_FIELD = "name";

export const CompanyInfoTitle = (record: TCompanyInfo): string => {
  return record.name?.toString() || String(record.id);
};
