import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CharactersModule } from './characters/characters.module';
import { EpisodesModule } from './episodes/episodes.module';
import { QuotesModule } from './quotes/quotes.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

const configService = new ConfigService();

@Module({
  imports: [
    CharactersModule,
    EpisodesModule,
    QuotesModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    MongooseModule.forRoot(configService.get<string>('MONGO_DB_CREDENTIALS')),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
