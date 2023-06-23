import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { QuotesModule } from './quotes/quotes.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    CharactersModule,
    EpisodesModule,
    QuotesModule,
    MongooseModule.forRoot(
      'mongodb+srv://rkauric:iFaz1aURQ1mFa1QJ@cluster0.b9czkm5.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
