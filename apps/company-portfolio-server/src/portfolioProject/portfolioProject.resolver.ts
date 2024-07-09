import * as graphql from "@nestjs/graphql";
import { PortfolioProjectResolverBase } from "./base/portfolioProject.resolver.base";
import { PortfolioProject } from "./base/PortfolioProject";
import { PortfolioProjectService } from "./portfolioProject.service";

@graphql.Resolver(() => PortfolioProject)
export class PortfolioProjectResolver extends PortfolioProjectResolverBase {
  constructor(protected readonly service: PortfolioProjectService) {
    super(service);
  }
}
