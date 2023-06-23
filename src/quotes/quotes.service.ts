import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuoteDocument } from 'src/schemas/quotes.schema';
import { Quote } from './entities/quote.entity';
@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(Quote.name)
    private quoteModel: Model<QuoteDocument>,
  ) {}

  async findAll() {
    return await this.quoteModel.find().exec();
  }

  async findOne(id: number) {
    return await this.quoteModel.findOne({ quote_id: id }).exec();
  }
}
