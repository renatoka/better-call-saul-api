import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CharacterDocument = HydratedDocument<Character>;

@Schema()
export class Character {
  @Prop()
  char_id: number;

  @Prop()
  name: string;

  @Prop()
  birthday: string;

  @Prop()
  occupation: string[];

  @Prop()
  img: string;

  @Prop()
  status: string;

  @Prop()
  nickname: string;

  @Prop()
  appearance: number[];

  @Prop()
  portrayed: string;

  @Prop()
  firstAppearance: string;

  @Prop()
  lastAppearance: string;
}

export const CharacterSchema = SchemaFactory.createForClass(Character);
