import * as graphql from "@nestjs/graphql";
import { ContentManagerResolverBase } from "./base/contentManager.resolver.base";
import { ContentManager } from "./base/ContentManager";
import { ContentManagerService } from "./contentManager.service";

@graphql.Resolver(() => ContentManager)
export class ContentManagerResolver extends ContentManagerResolverBase {
  constructor(protected readonly service: ContentManagerService) {
    super(service);
  }
}
