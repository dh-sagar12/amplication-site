import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ContentManagerService } from "./contentManager.service";
import { ContentManagerControllerBase } from "./base/contentManager.controller.base";

@swagger.ApiTags("contentManagers")
@common.Controller("contentManagers")
export class ContentManagerController extends ContentManagerControllerBase {
  constructor(protected readonly service: ContentManagerService) {
    super(service);
  }
}
