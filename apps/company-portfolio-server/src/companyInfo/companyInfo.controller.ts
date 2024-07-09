import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompanyInfoService } from "./companyInfo.service";
import { CompanyInfoControllerBase } from "./base/companyInfo.controller.base";

@swagger.ApiTags("companyInfos")
@common.Controller("companyInfos")
export class CompanyInfoController extends CompanyInfoControllerBase {
  constructor(protected readonly service: CompanyInfoService) {
    super(service);
  }
}
