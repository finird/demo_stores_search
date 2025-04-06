import { Controller, Get, Query } from "@nestjs/common";
import dbResult1 from "@db/search/1.json";

@Controller('business/search')
export class BusinessSearchController {
  @Get()
  search(@Query('q') query: string) {
    const data = dbResult1;
    return data;
  } 
}
