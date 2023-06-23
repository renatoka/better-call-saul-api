import { Controller, Get, Param, Query } from '@nestjs/common';
import { CharactersService } from './characters.service';

@Controller('api/characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Get()
  async findAll() {
    await this.charactersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.charactersService.findOne(+id);
  }
}
