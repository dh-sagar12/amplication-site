import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PortfolioProjectService } from "./portfolioProject.service";
import { PortfolioProjectControllerBase } from "./base/portfolioProject.controller.base";

@swagger.ApiTags("portfolioProjects")
@common.Controller("portfolioProjects")
export class PortfolioProjectController extends PortfolioProjectControllerBase {
  constructor(protected readonly service: PortfolioProjectService) {
    super(service);
  }
}
