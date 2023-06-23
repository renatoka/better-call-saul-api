import { Controller, Get, Param } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { UpdateEpisodeDto } from './dto/update-episode.dto';
import { ApiProperty } from '@nestjs/swagger';

@Controller('api/episodes')
export class EpisodesController {
  constructor(private readonly episodesService: EpisodesService) {}

  @Get()
  @ApiProperty({
    description: 'Get all episodes',
    required: false,
  })
  async findAll() {
    return await this.episodesService.findAll();
  }

  @Get(':id')
  @ApiProperty({
    description: 'Get all episodes by ID',
    required: false,
  })
  async findOne(@Param('id') id: string) {
    return await this.episodesService.findOne(+id);
  }
}
