import { CompanyInfoWhereInput } from "./CompanyInfoWhereInput";
import { CompanyInfoOrderByInput } from "./CompanyInfoOrderByInput";

export type CompanyInfoFindManyArgs = {
  where?: CompanyInfoWhereInput;
  orderBy?: Array<CompanyInfoOrderByInput>;
  skip?: number;
  take?: number;
};
