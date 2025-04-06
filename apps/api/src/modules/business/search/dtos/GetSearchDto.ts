import { ApiPropertyOptional } from '@nestjs/swagger';

export class GetSearchDto {
  @ApiPropertyOptional({
    description: 'The search term',
    default: '',
    examples: {
      Shop: {
        value: 'shop',
        summary: 'Search for a shop',
      },
      'H&M': {
        value: 'H&M',
        summary: 'Search for a H&M store',
      },
    },
  })
  q?: string;
}
