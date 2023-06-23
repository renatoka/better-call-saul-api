import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { CharactersModule } from './characters/characters.module';
import { QuotesModule } from './quotes/quotes.module';
import { EpisodesModule } from './episodes/episodes.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Better Call Saul (unofficial)')
    .setDescription(
      'This is a Better Call Saul API.  The API covers most of the data from the Better Call Saul universe, including characters, quotes and episodes.',
    )
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [CharactersModule, QuotesModule, EpisodesModule],
  });
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
