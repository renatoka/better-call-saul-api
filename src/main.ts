import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CharactersModule } from './characters/characters.module';
import { QuotesModule } from './quotes/quotes.module';
import { EpisodesModule } from './episodes/episodes.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Breaking Bad API')
    .setDescription('The Breaking Bad API swagger documentation')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [CharactersModule, QuotesModule, EpisodesModule],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
