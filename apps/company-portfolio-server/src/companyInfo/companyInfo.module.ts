import { Module } from "@nestjs/common";
import { CompanyInfoModuleBase } from "./base/companyInfo.module.base";
import { CompanyInfoService } from "./companyInfo.service";
import { CompanyInfoController } from "./companyInfo.controller";
import { CompanyInfoResolver } from "./companyInfo.resolver";

@Module({
  imports: [CompanyInfoModuleBase],
  controllers: [CompanyInfoController],
  providers: [CompanyInfoService, CompanyInfoResolver],
  exports: [CompanyInfoService],
})
export class CompanyInfoModule {}
