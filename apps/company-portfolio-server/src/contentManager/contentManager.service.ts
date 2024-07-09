import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ContentManagerServiceBase } from "./base/contentManager.service.base";

@Injectable()
export class ContentManagerService extends ContentManagerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
