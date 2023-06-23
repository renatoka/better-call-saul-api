import { Module } from '@nestjs/common';
import { EpisodesService } from './episodes.service';
import { EpisodesController } from './episodes.controller';

@Module({
  controllers: [EpisodesController],
  providers: [EpisodesService]
})
export class EpisodesModule {}
