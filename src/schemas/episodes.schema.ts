import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type EpisodeDocument = HydratedDocument<Episode>;

@Schema()
export class Episode {
  @Prop()
  episode_id: number;

  @Prop()
  title: string;

  @Prop()
  season: number;

  @Prop()
  air_date: string;

  @Prop()
  characters: string[];

  @Prop()
  episode: number;
}

export const EpisodeSchema = SchemaFactory.createForClass(Episode);
