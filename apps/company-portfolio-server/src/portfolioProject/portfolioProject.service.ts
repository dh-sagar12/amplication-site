import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PortfolioProjectServiceBase } from "./base/portfolioProject.service.base";

@Injectable()
export class PortfolioProjectService extends PortfolioProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
