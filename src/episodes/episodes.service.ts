import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EpisodeDocument } from 'src/schemas/episodes.schema';
import { Episode } from './entities/episode.entity';

@Injectable()
export class EpisodesService {
  @InjectModel(Episode.name)
  private episodeModel: Model<EpisodeDocument>;

  async findAll() {
    return await this.episodeModel.find().exec();
  }

  async findOne(id: number) {
    return await this.episodeModel.findOne({ episode_id: id }).exec();
  }
}
