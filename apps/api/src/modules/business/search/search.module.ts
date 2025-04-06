import { Module } from '@nestjs/common';
import { BusinessSearchController } from './search.controller';

@Module({
  controllers: [BusinessSearchController],
})
export class BusinessModuleSearchModule {}
