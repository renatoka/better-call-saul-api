import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { ApiProperty } from '@nestjs/swagger';

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
    description: 'Get a character by id',
    required: false,
  })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.charactersService.findOne(+id);
  }
}
