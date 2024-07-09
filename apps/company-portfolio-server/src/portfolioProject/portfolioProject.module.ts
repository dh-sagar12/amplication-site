import { Module } from "@nestjs/common";
import { PortfolioProjectModuleBase } from "./base/portfolioProject.module.base";
import { PortfolioProjectService } from "./portfolioProject.service";
import { PortfolioProjectController } from "./portfolioProject.controller";
import { PortfolioProjectResolver } from "./portfolioProject.resolver";

@Module({
  imports: [PortfolioProjectModuleBase],
  controllers: [PortfolioProjectController],
  providers: [PortfolioProjectService, PortfolioProjectResolver],
  exports: [PortfolioProjectService],
})
export class PortfolioProjectModule {}
