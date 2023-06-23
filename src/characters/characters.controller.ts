import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiProperty, ApiResponse } from '@nestjs/swagger';

@Controller('api/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  @ApiProperty({
    description: 'Get all characters',
    required: false,
  })
  async findAll() {
    return await this.charactersService.findAll();
  }

  @ApiProperty({
    description: 'Get all characters by ID',
    required: false,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id);
  }
}
