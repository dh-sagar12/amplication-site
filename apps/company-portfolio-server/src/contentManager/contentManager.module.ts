import { Module } from "@nestjs/common";
import { ContentManagerModuleBase } from "./base/contentManager.module.base";
import { ContentManagerService } from "./contentManager.service";
import { ContentManagerController } from "./contentManager.controller";
import { ContentManagerResolver } from "./contentManager.resolver";

@Module({
  imports: [ContentManagerModuleBase],
  controllers: [ContentManagerController],
  providers: [ContentManagerService, ContentManagerResolver],
  exports: [ContentManagerService],
})
export class ContentManagerModule {}
