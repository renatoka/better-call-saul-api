import { Injectable } from '@nestjs/common';
import { Character, CharacterDocument } from 'src/schemas/characters.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CharactersService {
  constructor(
    @InjectModel(Character.name)
    private characterModel: Model<CharacterDocument>,
  ) {}

  async findAll() {
    return await this.characterModel.find().exec();
  }

  async findOne(id: number) {
    return await this.characterModel.findOne({ id: id }).exec();
  }
}
