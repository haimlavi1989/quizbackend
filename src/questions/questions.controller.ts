import { Controller, Get } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { Question } from './question.model';
import { response } from 'express';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

/*   @Get()
  getHello(): string {
    return this.questionsService.getHello();
  } */

  @Get()

  async getAllQuestions() {
    
    return await this.questionsService.findAll();

  }
}
