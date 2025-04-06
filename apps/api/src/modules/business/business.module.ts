import { Module } from '@nestjs/common';
import { BusinessModuleSearchModule } from '@modules/business/search/search.module';

@Module({
  imports: [BusinessModuleSearchModule]
})
export class BusinessModule {}
