import * as graphql from "@nestjs/graphql";
import { CompanyInfoResolverBase } from "./base/companyInfo.resolver.base";
import { CompanyInfo } from "./base/CompanyInfo";
import { CompanyInfoService } from "./companyInfo.service";

@graphql.Resolver(() => CompanyInfo)
export class CompanyInfoResolver extends CompanyInfoResolverBase {
  constructor(protected readonly service: CompanyInfoService) {
    super(service);
  }
}
