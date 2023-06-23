import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema()
export class Quote {
  @Prop()
  quote_id: number;

  @Prop()
  quote: string;

  @Prop()
  author: string;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
