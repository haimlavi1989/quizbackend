import { Injectable, HttpService } from '@nestjs/common';
import { Question } from './question.model';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { response } from 'express';
import { map } from 'rxjs/operators';

@Injectable()
export class QuestionsService {

  private questions: Question[] = [];

  constructor(private httpService: HttpService) {}

  async findAll(): Promise<Question[]> {
    const response = await this.httpService.get<Question[]>('https://opentdb.com/api.php?amount=10&type=multiple').toPromise();
    this.questions = response.data;
    return this.questions;
}

  getQuestions(): Question[] {
    return this.questions.slice();
  }
}
