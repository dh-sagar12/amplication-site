import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CompanyInfoServiceBase } from "./base/companyInfo.service.base";

@Injectable()
export class CompanyInfoService extends CompanyInfoServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
