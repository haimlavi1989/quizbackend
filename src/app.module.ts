import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module'
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    QuestionsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '/client'),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
