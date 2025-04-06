import dbResult1 from '@db/search/1.json';
import { Controller, Get, Query } from '@nestjs/common';
import { GetSearchDto } from './dtos/GetSearchDto';

@Controller('business/search')
export class BusinessSearchController {
  @Get()
  search(@Query() query: GetSearchDto) {
    console.log('🍭 ~ BusinessSearchController ~ search ~ query:', query);
    const data = dbResult1;
    return data;
  }
}
