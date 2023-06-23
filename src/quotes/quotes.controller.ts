import { Controller, Get, Param } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { ApiProperty } from '@nestjs/swagger';

@Controller('api/quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) {}

  @Get()
  @ApiProperty({
    description: 'Get all quotes',
    required: false,
  })
  async findAll() {
    return await this.quotesService.findAll();
  }

  @Get(':id')
  @ApiProperty({
    description: 'Get all quotes by ID',
    required: false,
  })
  async findOne(@Param('id') id: string) {
    return await this.quotesService.findOne(+id);
  }
}
