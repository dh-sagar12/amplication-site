/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CompanyInfoService } from "../companyInfo.service";
import { CompanyInfoCreateInput } from "./CompanyInfoCreateInput";
import { CompanyInfo } from "./CompanyInfo";
import { CompanyInfoFindManyArgs } from "./CompanyInfoFindManyArgs";
import { CompanyInfoWhereUniqueInput } from "./CompanyInfoWhereUniqueInput";
import { CompanyInfoUpdateInput } from "./CompanyInfoUpdateInput";

export class CompanyInfoControllerBase {
  constructor(protected readonly service: CompanyInfoService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CompanyInfo })
  async createCompanyInfo(
    @common.Body() data: CompanyInfoCreateInput
  ): Promise<CompanyInfo> {
    return await this.service.createCompanyInfo({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        description: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CompanyInfo] })
  @ApiNestedQuery(CompanyInfoFindManyArgs)
  async companyInfos(@common.Req() request: Request): Promise<CompanyInfo[]> {
    const args = plainToClass(CompanyInfoFindManyArgs, request.query);
    return this.service.companyInfos({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        description: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CompanyInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async companyInfo(
    @common.Param() params: CompanyInfoWhereUniqueInput
  ): Promise<CompanyInfo | null> {
    const result = await this.service.companyInfo({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        name: true,
        address: true,
        description: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: CompanyInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCompanyInfo(
    @common.Param() params: CompanyInfoWhereUniqueInput,
    @common.Body() data: CompanyInfoUpdateInput
  ): Promise<CompanyInfo | null> {
    try {
      return await this.service.updateCompanyInfo({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: CompanyInfo })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCompanyInfo(
    @common.Param() params: CompanyInfoWhereUniqueInput
  ): Promise<CompanyInfo | null> {
    try {
      return await this.service.deleteCompanyInfo({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          name: true,
          address: true,
          description: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}